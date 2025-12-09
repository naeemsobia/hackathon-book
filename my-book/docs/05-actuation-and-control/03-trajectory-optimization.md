---
sidebar_position: 3
---

# Lesson 5.3: Trajectory Optimization and Motion Planning

:::note Objective
This lesson introduces the concepts of trajectory optimization and motion planning, and explains how robots can use these techniques to plan their movements in a way that is both efficient and collision-free.
:::

## The Motion Planning Problem

The motion planning problem is the problem of finding a path for a robot to move from a starting configuration to a goal configuration, while avoiding collisions with obstacles in the environment. This is a fundamental problem in robotics, and it has been studied extensively for many years.

### Key Challenges in Motion Planning:

*   **High-Dimensionality**: The robot's configuration space can be very high-dimensional, which makes it difficult to search for a solution to the motion planning problem.
*   **Complex Constraints**: The robot's motion is subject to a variety of complex constraints, including joint limits, velocity limits, and acceleration limits.
*   **Dynamic Environments**: The environment may be dynamic, with moving obstacles that need to be avoided.

## Trajectory Optimization

Trajectory optimization is a technique for finding a trajectory for a robot to move from a starting configuration to a goal configuration that is optimal with respect to some cost function. For example, the cost function could be the length of the trajectory, the amount of time it takes to execute the trajectory, or the amount of energy that is consumed.

### Common Trajectory Optimization Algorithms:

*   **CHOMP (Covariant Hamiltonian Optimization for Motion Planning)**: CHOMP is a gradient-based trajectory optimization algorithm that is able to find smooth, collision-free trajectories for high-dimensional robots.
*   **STOMP (Stochastic Trajectory Optimization for Motion Planning)**: STOMP is a stochastic trajectory optimization algorithm that is able to find good solutions to the motion planning problem, even in the presence of local minima.
*   **TrajOpt**: TrajOpt is a sequential convex optimization-based trajectory optimization algorithm that is able to handle a wide variety of complex constraints.

## Sampling-Based Motion Planning

Sampling-based motion planning is a class of algorithms that are able to find solutions to the motion planning problem by randomly sampling points in the robot's configuration space. These algorithms are able to handle high-dimensional configuration spaces and complex constraints, and they are guaranteed to find a solution to the motion planning problem, if one exists.

### Common Sampling-Based Motion Planning Algorithms:

*   **PRM (Probabilistic Roadmap)**: The PRM algorithm works by building a roadmap of the robot's configuration space, and then searching for a path in the roadmap from the starting configuration to the goal configuration.
*   **RRT (Rapidly-Exploring Random Tree)**: The RRT algorithm works by building a tree of the robot's configuration space, and then searching for a path in the tree from the starting configuration to the goal configuration.

:::tip Key Takeaways
*   The **motion planning problem** is the problem of finding a collision-free path for a robot to move from a starting configuration to a goal configuration.
*   **Trajectory optimization** is a technique for finding a trajectory that is optimal with respect to some cost function.
*   **Sampling-based motion planning** is a class of algorithms that are able to find solutions to the motion planning problem by randomly sampling points in the robot's configuration space.
:::

### Further Reading:
*   [Planning Algorithms](http://planning.cs.uiuc.edu/)
*   [A good tutorial on sampling-based motion planning](https://www.youtube.com/watch?v=k2G4iC41iXw)
