import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  year: string;
  type: "Project" | "Work" | "Other";
  title: string;
  description: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    type: "Project",
    title: "Robotic Hand Object Manipulation – Planning and Control",
    description: "Implemented planning and control algorithms enabling a ShadowHand with tactile sensors to grasp, move, and precisely manipulate objects. Designed multi-finger coordination based on real-time sensor feedback, achieving reliable object positioning and movement.",
    tags: ["ROS", "Docker", "Kinematics", "UnderactuatedSystems", "ShadowHand", "ObjectManipulation", "PlanningHeuristics"]
  },
  {
    year: "2025",
    type: "Project",
    title: "Statistical Modeling of Joint Configurations",
    description: "Developed statistical model to accurately describe joint configurations of the ShadowHand. Addressed discrepancies between official documentation and the real-world behavior of underactuated joints by analyzing data from the hand and capturing the kinematic relationships.",
    tags: ["StatisticalModeling", "UnderactuatedJoints", "DataAnalysis", "Python", "MachineLearning", "Regression", "SensorData", "ParameterEstimation", "DataDriven"]
  },
  {
    year: "2024",
    type: "Project",
    title: "Mathematical and Physical Modeling of Object–Hand Interaction",
    description: "Developed and simulated mathematical and physical models of object–hand interaction, including contact geometry, curvatures, rolling dynamics, and force constraints for realistic manipulation. Validated accuracy with numerical analysis and Mujoco simulations.",
    tags: ["Dynamics", "StabilityAnalysis", "PhysicsBasedModeling", "MathematicalModeling", "ConstraintProgramming", "NumericalAnalysis"]
  },
  {
    year: "2023",
    type: "Other",
    title: "Public Speaking - Algorithms in Autonomous Mobile Robots",
    description: "Delivered presentation on algorithms in autonomous robots with Johan S. Laursen. Covered navigation algorithms, mapping, path planning, and obstacle avoidance. Explored what makes algorithms good or bad, and how mathematical approaches drive robotic decision-making.",
    tags: ["PublicSpeaking", "Algorithms", "Navigation", "PathPlanning", "SLAM", "Mathematics"]
  },
  {
    year: "2023",
    type: "Work",
    title: "PhD Student in Robotics",
    description: "Conducting research in robotics with a focus on robotic manipulation, underactuated systems, and intelligent control. Developing mathematical models, implementing novel algorithms, and validating results through simulation and real-world experiments.",
    tags: ["Robotics", "AlgorithmDevelopment", "Simulation", "ExperimentalValidation", "Automation", "RobotControl"]
  },
  {
    year: "2023",
    type: "Other",
    title: "Teaching - Underactuated Robotics",
    description: "Taught undergraduate course covering control and dynamics of robots with more degrees of freedom than control inputs (e.g., drones, walking robots, ballbots). Emphasized exploiting natural dynamics, modern control strategies, and hands-on advanced control design.",
    tags: ["Teaching", "UnderactuatedRobotics", "ControlTheory", "Dynamics", "Robotics", "EngineeringEducation"]
  },
  {
    year: "2022",
    type: "Project",
    title: "Christmas Coding Event - 2D Podracing Game",
    description: "Organized a Christmas coding event. Developed a 2D podracing game engine where participants programmed bots to compete in algorithmic challenges. Designed as a programming competition that blended gaming with hands-on algorithmic problem-solving.",
    tags: ["SideProject", "GameDevelopment", "CodingCompetition", "AlgorithmicChallenge", "EventOrganization"]
  },
  {
    year: "2022",
    type: "Work",
    title: "Post-doc in Computer Science",
    description: "Developed algorithms and theoretical frameworks for ensuring robust network connectivity under failures. In addition to research, taught graduate course in graph theory.",
    tags: ["SurvivableNetworkDesign", "GraphAlgorithms", "Connectivity", "CombinatorialOptimization"]
  },
  {
    year: "2021",
    type: "Work",
    title: "PhD in Computer Science",
    description: "Dissertation addressed NP-hard network design problems with real-world applications in transportation, communication, and social networks, developing methods to enable more reliable and cost-effective systems under practical constraints.",
    tags: ["NetworkDesign", "AppliedAlgorithms", "Connectivity", "Optimization", "Infrastructure", "GraphTheory", "ParameterizedComplexity"]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Project":
      return "bg-primary/10 text-primary border-primary/20";
    case "Work":
      return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
    case "Other":
      return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Timeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Timeline
          </h2>
          <div className="w-16 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line rounded-full"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 timeline-dot rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <Card className="card-shadow hover:glow-shadow transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getTypeColor(item.type)}>
                            {item.type}
                          </Badge>
                          <span className="text-sm font-medium text-primary">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary"
                            className="text-xs bg-accent text-accent-foreground hover:bg-accent/80"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;