import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import all project images
import roboticHandImage from "@/assets/robotic-hand-manipulation.jpg";
import statisticalModelingImage from "@/assets/statistical-modeling.jpg";
import mathematicalModelingImage from "@/assets/mathematical-modeling.jpg";
import publicSpeakingImage from "@/assets/public-speaking.jpg";
import phdResearchImage from "@/assets/phd-research.jpg";
import teachingRoboticsImage from "@/assets/teaching-robotics.jpg";
import codingGameImage from "@/assets/coding-game.jpg";
import networkAlgorithmsImage from "@/assets/network-algorithms.jpg";
import phdDissertationImage from "@/assets/phd-dissertation.jpg";

interface TimelineItem {
  year: string;
  type: "Project" | "Work" | "Other";
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    type: "Project",
    title: "Robotic Hand Object Manipulation – Planning and Control",
    description: "Implemented planning and control algorithms enabling a ShadowHand with tactile sensors to grasp, move, and precisely manipulate objects. Designed multi-finger coordination based on real-time sensor feedback, achieving reliable object positioning and movement.",
    tags: ["ROS", "Docker", "Kinematics", "UnderactuatedSystems", "ShadowHand", "ObjectManipulation", "PlanningHeuristics"],
    image: roboticHandImage
  },
  {
    year: "2025",
    type: "Project",
    title: "Statistical Modeling of Joint Configurations",
    description: "Developed statistical model to accurately describe joint configurations of the ShadowHand. Addressed discrepancies between official documentation and the real-world behavior of underactuated joints by analyzing data from the hand and capturing the kinematic relationships.",
    tags: ["StatisticalModeling", "UnderactuatedJoints", "DataAnalysis", "Python", "MachineLearning", "Regression", "SensorData", "ParameterEstimation", "DataDriven"],
    image: statisticalModelingImage
  },
  {
    year: "2024",
    type: "Project",
    title: "Mathematical and Physical Modeling of Object–Hand Interaction",
    description: "Developed and simulated mathematical and physical models of object–hand interaction, including contact geometry, curvatures, rolling dynamics, and force constraints for realistic manipulation. Validated accuracy with numerical analysis and Mujoco simulations.",
    tags: ["Dynamics", "StabilityAnalysis", "PhysicsBasedModeling", "MathematicalModeling", "ConstraintProgramming", "NumericalAnalysis"],
    image: mathematicalModelingImage
  },
  {
    year: "2023",
    type: "Other",
    title: "Public Speaking - Algorithms in Autonomous Mobile Robots",
    description: "Delivered presentation on algorithms in autonomous robots with Johan S. Laursen. Covered navigation algorithms, mapping, path planning, and obstacle avoidance. Explored what makes algorithms good or bad, and how mathematical approaches drive robotic decision-making.",
    tags: ["PublicSpeaking", "Algorithms", "Navigation", "PathPlanning", "SLAM", "Mathematics"],
    image: publicSpeakingImage
  },
  {
    year: "2023",
    type: "Work",
    title: "PhD Student in Robotics",
    description: "Conducting research in robotics with a focus on robotic manipulation, underactuated systems, and intelligent control. Developing mathematical models, implementing novel algorithms, and validating results through simulation and real-world experiments.",
    tags: ["Robotics", "AlgorithmDevelopment", "Simulation", "ExperimentalValidation", "Automation", "RobotControl"],
    image: phdResearchImage
  },
  {
    year: "2023",
    type: "Other",
    title: "Teaching - Underactuated Robotics",
    description: "Taught undergraduate course covering control and dynamics of robots with more degrees of freedom than control inputs (e.g., drones, walking robots, ballbots). Emphasized exploiting natural dynamics, modern control strategies, and hands-on advanced control design.",
    tags: ["Teaching", "UnderactuatedRobotics", "ControlTheory", "Dynamics", "Robotics", "EngineeringEducation"],
    image: teachingRoboticsImage
  },
  {
    year: "2022",
    type: "Project",
    title: "Christmas Coding Event - 2D Podracing Game",
    description: "Organized a Christmas coding event. Developed a 2D podracing game engine where participants programmed bots to compete in algorithmic challenges. Designed as a programming competition that blended gaming with hands-on algorithmic problem-solving.",
    tags: ["SideProject", "GameDevelopment", "CodingCompetition", "AlgorithmicChallenge", "EventOrganization"],
    image: codingGameImage
  },
  {
    year: "2022",
    type: "Work",
    title: "Post-doc in Computer Science",
    description: "Developed algorithms and theoretical frameworks for ensuring robust network connectivity under failures. In addition to research, taught graduate course in graph theory.",
    tags: ["SurvivableNetworkDesign", "GraphAlgorithms", "Connectivity", "CombinatorialOptimization"],
    image: networkAlgorithmsImage
  },
  {
    year: "2021",
    type: "Work",
    title: "PhD in Computer Science",
    description: "Dissertation addressed NP-hard network design problems with real-world applications in transportation, communication, and social networks, developing methods to enable more reliable and cost-effective systems under practical constraints.",
    tags: ["NetworkDesign", "AppliedAlgorithms", "Connectivity", "Optimization", "Infrastructure", "GraphTheory", "ParameterizedComplexity"],
    image: phdDissertationImage
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Project":
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800";
    case "Work":
      return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800";
    case "Other":
      return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Timeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Timeline
          </h2>
          <div className="w-16 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line rounded-full transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex items-center">
                  {/* Timeline dot - centered */}
                  <div className="absolute left-1/2 w-4 h-4 timeline-dot rounded-full border-4 border-background transform -translate-x-1/2 z-10 hidden md:block"></div>
                  
                  {/* Content container */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                    <Card className={`card-shadow hover:glow-shadow transition-all duration-300 ${isLeft ? 'md:text-right' : ''}`}>
                      <CardHeader className="pb-4">
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <Badge variant="outline" className={getTypeColor(item.type)}>
                            {item.type}
                          </Badge>
                          <span className="text-lg font-semibold text-primary">
                            {item.year}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-semibold leading-tight">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Project image */}
                        <div className="w-full h-48 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                        
                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;