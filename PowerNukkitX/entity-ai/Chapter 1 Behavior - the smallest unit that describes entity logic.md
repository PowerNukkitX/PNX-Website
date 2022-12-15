# Chapter 1 Behavior - the smallest unit that describes entity logic

_**author: daoge_cmd**_

## 1.0 Introduction

Creatures are an important part of MC. However, since ancient times, the lack of biological characteristics has always been a flaw in the NK system (and even third-party) servers.

We are glad to see some successful solutions in the community, such as the third-party plugin [MobPlugin](https://github.com/Nukkit-coders/MobPlugin). Unfortunately, although similar plug-ins can make up for the regret that there are no creatures on the NK server, their operating effects are hard to describe. Take MobPlugin as an example, its chaotic architecture design + a large number of missing features + unsatisfactory spawning logic makes us have to abandon [NukkitPetteriM1Edition](https://github.com/PetteriM1/NukkitPetteriM1Edition) approach (built-in MobPlugin)

We chose to design the architecture ourselves. Although [the process was difficult](https://www.minebbs.com/threads/powernukkitx-ai-2022-7-29.13358/) (3 overthrows and rewrites + countless tests and optimizations), we finally did it. PNX's biological AI framework completely surpasses other implementations in the community in terms of performance, effect, and ease of use. We believe that PNX's entity AI framework combined with the custom entity item block API launched earlier, Terra generator, etc. will help plug-in developers to better realize their own ideas, so that RPG, exploration and other server types can achieve new heights

For performance, we have achieved complete asynchrony + parallelism, which makes it perfect for multi-core machines. In our development test (the test machine is the author's computer), PNX successfully realized 2600 entities (sheep) on the same screen, and ran smoothly at a stable 20 tps while fully restoring the original features.

During the design process, we borrowed from the original JE version of Memory, Activity, and Behavior, and at the same time integrated the idea of modularization (componentization) of the original BE version, which makes the framework itself extremely easy to use. In order to reflect the ease of use, the core fully implements creatures such as Wardens, dogs, zombies, and creepers. Among them, the guardian is one of the creatures with the most complex behavior in the original version. Based on the PNX biological AI framework, the author has easily realized it, including but not limited to ``` melee and long-range attack switching```, ```anger value system``` Wait for logic. You can start a PNX server right now and generate Wardens, or [view source](https:github.com Power Nukkit X Power Nukkit Xblobmastersrcmainjavacnnukkitentitymob Entity Warden.java) to learn about its implementation, which we believe is the ultimate in ease of use of the framework good proof

We will use the creature "sheep" as an example to introduce each part of the framework

## 1.1.0 Behavior - the smallest unit to describe entity logic

It is not difficult to imagine that a complete sheep has the following behaviors:

- look to nearest player
- roam randomly
- run away when taking damage
- run to player with wheat in hand
- eat grass
- mate

These behaviors are independent of each other, and we call each independent behavior a ```Behavior```. In this way, the complex logic of sheep is abstracted into ```Behavior``` by us.

### 1.1.1 Behavior Evaluator and Actuator

Of course, only ```Behavior``` is obviously not enough. We noticed that not all behaviors were running throughout the sheep's life cycle. After realizing this, we continue to subdivide ```Behavior``` into ```BehaviorExecutor``` (behavior executor) and ```BehaviorEvaluator``` (behavior evaluator), where ```BehaviorExecutor ``` contains the specific things to do when this behavior is activated, and ```BehaviorEvaluator``` contains the logic to determine whether this behavior should be activated.

What we need to pay special attention to is the relationship between the evaluator and the executor. Coming to the source code, the interface description of the two is as follows:

![](%relativePrefix%image/common/entity-ai/cd5125c1.png)
![](%relativePrefix%image/common/entity-ai/6634698d.png)

If the behavior is inactive, the ```evaluate``` method of the evaluator will be called every gt(tunable).

When the ```evaluate``` method returns ```true```, it means that the evaluation is successful, and the ```execute``` method of the executor will be called once every gt (adjustable) until```execute``` method returns ```false```

Note that while a behavior is active, its evaluator will not be called again. In other words, when an active behavior stops is determined by the executor or is overridden by a higher priority behavior (see next paragraph for details).

When the behavior executor actively stops activation due to returning ```false```, its ```onStop``` method will be called, however if it is interrupted by a higher priority behavior override, it will be called Its ```onInterrupt``` method instead of ```onStop```.

### 1.1.2 Behavior priority

Behavior itself not only has execution conditions, but in fact there is also a mutual restrictive relationship between behaviors. For example, when the sheep finds that there is a player holding wheat in the range, its active ```random roaming``` behavior should stop running. We call this relationship between behaviors the priority coverage principle, that is, each behavior has a specific priority. When a high-priority behavior is activated, the running low-priority behavior should be interrupted; for two behaviors with the same priority, they can be active at the same time. 

Rearranged from high to low:

- 4 flee when taking damage 
- 3 mate 
- 2 run to player with wheat in hand 
- 1 graze 
- 0 look at nearest player & roam randomly

### 1.1.3 Creating Behaviors by Combining Evaluators and Actuators

To write a new behavior, you might choose to create a class called ```MyBehavior``` and implement the interfaces ```IBehaviorExecutor``` and ```IBehaviorEvaluator```.

In fact we don't do that, we use "delegation" to create behavior. Focus on the class ```Behavior``` and its inheritance relationship:

![](%relativePrefix%image/common/entity-ai/1effadd0.png)

The class ```Behavior``` implements the interfaces ```IBehaviorExecutor``` and ```IBehaviorEvaluator```, and its constructor requires the implementation of the evaluator and executor and delegates its methods internally. The biggest advantage of doing this is that you can reuse existing evaluators and executors to quickly create new behaviors without rewriting logic.

The class ```Behavior``` also contains attributes such as the priority of the behavior, the evaluation period, etc. You can [view source code](https://github.com/PowerNukkitX/PowerNukkitX/blob/master/src/main/java/cn/nukkit/entity/ai/behavior/Behavior.java) for details

### 1.1.4 Core Behavior

If we don't want a certain behavior to participate in the priority "competition" between behaviors, we can also choose to register the behavior as ```Core Behavior``` (core behavior). There is no priority override principle between core behaviors, and its activation depends only on its own evaluator

## 1.2.0 Behavior groups - containers for behaviors, but not only

Behavior group ```BehaviorGroup``` stores a series of behaviors. For example, all the behaviors of the sheep above are a behavior group.

In fact, a behavior group is not just a behavior container, it actually contains all the logical components of a class of organisms, and the behaviors introduced in this chapter are only part of its components. A complete behavior group contains:

- Behavior, Core Behavior
- Memory Storage (the bridge connecting all components) 
- Sensors (for collecting data from the environment and writing to the entity's memory) 
- Pathfinder (provides pathfinding implementation) 
- Controller (provides creature movement accomplish)

See Chapter 6 for details