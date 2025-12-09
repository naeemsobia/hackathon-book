---
sidebar_position: 3
---

# Lesson 6.3: Sim-to-Real Transfer for Humanoid Robotics

:::note Objective
This lesson explores the challenge of transferring skills learned in simulation to the real world, a process known as sim-to-real transfer, and discusses the techniques that can be used to bridge the "reality gap."
:::

## The Reality Gap

Simulation is a powerful tool for training robots. It allows us to collect a large amount of data in a safe and controlled environment, without the risk of damaging the robot or the environment.

However, there is often a "reality gap" between simulation and the real world. This means that a policy that works well in simulation may not work well in the real world. This is because it is difficult to create a simulation that is a perfect replica of the real world.

### Sources of the Reality Gap:

*   **Inaccurate Modeling**: The physical properties of the robot and the environment may not be modeled accurately in the simulation.
*   **Unmodeled Effects**: There may be unmodeled effects in the real world, such as friction, air resistance, and sensor noise, that are not present in the simulation.
*   **Stochasticity**: The real world is often more stochastic than the simulation, with unexpected events and disturbances that can be difficult to model.

## Techniques for Bridging the Reality Gap

*   **Domain Randomization**: Domain randomization is a technique for bridging the reality gap by training the policy in a variety of different simulated environments. This helps to make the policy more robust to variations in the real world.
*   **System Identification**: System identification is a technique for bridging the reality gap by building a more accurate model of the robot and the environment. This can be done by collecting data from the real world and then using this data to train a model of the system.
*   **Adapter Networks**: Adapter networks are a type of neural network that can be used to adapt a policy that was trained in simulation to the real world. The adapter network is trained to predict the difference between the simulated and the real world, and this information is then used to adjust the policy's actions.

## The Future of Sim-to-Real Transfer

The future of sim-to-real transfer is likely to involve a combination of all of these techniques. By using a combination of domain randomization, system identification, and adapter networks, it should be possible to train policies in simulation that are able to transfer to the real world with a high degree of success.

:::tip Key Takeaways
*   The **reality gap** is the gap between simulation and the real world.
*   The reality gap can be caused by a variety of factors, including **inaccurate modeling**, **unmodeled effects**, and **stochasticity**.
*   There are a variety of techniques that can be used to bridge the reality gap, including **domain randomization**, **system identification**, and **adapter networks**.
:::

### Further Reading:
*   [A good overview of sim-to-real transfer](https://www.youtube.com/watch?v=K1-H3t_u5ao)
*   [The "Robotics at Google" research group](https://research.google/teams/robotics/)
