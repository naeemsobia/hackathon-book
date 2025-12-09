---
sidebar_position: 2
---

# Lesson 5.2: Whole-Body Control and Dynamics

:::note Objective
This lesson explores the challenges of controlling a complex, multi-jointed robot, and introduces the concept of whole-body control, a powerful framework for coordinating the motion of all of the robot's joints in a holistic and dynamic way.
:::

## The Challenge of High-Dimensional Control

Humanoid robots are complex, high-dimensional systems, with dozens of joints that need to be controlled in a coordinated way. This makes the problem of controlling a humanoid robot much more challenging than the problem of controlling a simple robotic arm.

### The Curse of Dimensionality

The "curse of dimensionality" is a term that was coined by Richard Bellman to describe the problem of exponential growth of the volume of a mathematical space as a function of its dimension. In the context of robotics, the curse of dimensionality means that the size of the robot's state space grows exponentially with the number of joints, which makes it very difficult to search for a solution to the control problem.

## Whole-Body Control

Whole-body control is a framework for controlling a humanoid robot that takes into account the dynamics of the entire body, rather than just the dynamics of the individual joints. This allows the robot to generate more natural and dynamic movements, and to interact with the world in a more robust and intelligent way.

### Key Concepts in Whole-Body Control:

*   **Inverse Dynamics**: Inverse dynamics is the problem of calculating the joint torques that are required to achieve a desired motion of the robot's end-effectors. This is a difficult problem, because it requires solving a set of non-linear differential equations.
*   **Operational Space Control**: Operational space control is a framework for controlling a robot that focuses on the motion of the robot's end-effectors, rather than the motion of the robot's joints. This allows the robot to be controlled in a more intuitive and task-oriented way.
*   **Hierarchical Control**: Hierarchical control is a framework for controlling a robot that breaks the control problem down into a hierarchy of sub-problems. This allows the robot to be controlled in a more modular and scalable way.

## The Future of Whole-Body Control

The future of whole-body control is likely to involve the use of machine learning to learn the dynamics of the robot and the environment, and to automatically generate control policies that are optimized for a given task. This will allow us to create robots that are able to learn new skills and to adapt to new situations in a way that is not possible with traditional, hand-engineered control systems.

:::tip Key Takeaways
*   **Humanoid robots** are complex, high-dimensional systems, which makes the problem of controlling them very challenging.
*   **Whole-body control** is a powerful framework for coordinating the motion of all of the robot's joints in a holistic and dynamic way.
*   The future of whole-body control is likely to involve the use of **machine learning** to learn control policies automatically.
:::

### Further Reading:
*   [A good introduction to whole-body control](https://www.youtube.com/watch?v=y6v2b4kC-fA)
*   [The "Dynamic Legged Systems" lab at ETH Zurich](https://www.ethz.ch/en/news-and-events/eth-news/news/2021/07/legged-robots-are-ready-for-the-real-world.html)
