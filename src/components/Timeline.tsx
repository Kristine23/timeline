import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

// Import all project images
import shadowRobotImage from "@/assets/shadow-robot1.jpg";
import roboticHandVideo from "@/assets/robotic-hand-manipulation.webm";
import statToUseNewImage from "@/assets/stat-to-use-new.jpg";
import contact1Image from "@/assets/contact1.jpg";
import spotImage from "@/assets/spot.jpg";
import phdResearchImage from "@/assets/phd-research.jpg";
import teachingRoboticsImage from "@/assets/teaching-robotics.jpg";
import teachingUnderactuatedRoboticsImage from "@/assets/teaching-underactuated-robotics-focused.jpg";
import codingGameImage from "@/assets/coding-game.jpg";
import christmasCodingFootballGif from "@/assets/christmas-coding-football.gif";
import networkAlgorithmsImage from "@/assets/network-algorithms.jpg";
import networkAlgorithmsPurpleImage from "@/assets/network-algorithms-purple.jpg";
import phdDissertationImage from "@/assets/phd-dissertation.jpg";
import hafnianComputationImage from "@/assets/hafnian-computation.jpg";

interface TimelineItem {
  year: string;
  type: "Project" | "Job" | "Other";
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    type: "Project",
    title: "Hafnian Computation Algorithm – Python Implementation",
    description: "Implemented computation of the hafnian of real symmetric matrices of even size based on scientific paper. Developed in Python with unit tests and numerical error estimation.",
    tags: ["Python", "UnitTesting", "LinearAlgebra", "Hafnian", "AlgorithmImplementation", "ComputationalMathematics"],
    image: hafnianComputationImage
  },
  {
    year: "2025",
    type: "Project",
    title: "Robotic Hand Object Manipulation – Planning and Control",
    description: "Implemented planning and control algorithms enabling a ShadowHand with tactile sensors to grasp, move, and precisely manipulate objects. Designed multi-finger coordination based on real-time sensor feedback, achieving reliable object positioning and movement.",
    tags: ["ROS", "Docker", "Kinematics", "UnderactuatedSystems", "ShadowHand", "ObjectManipulation", "PlanningHeuristics"],
    image: shadowRobotImage
  },
  {
    year: "2025",
    type: "Project",
    title: "Statistical Modeling of Joint Configurations",
    description: "Developed statistical model to accurately describe joint configurations of the ShadowHand. Addressed discrepancies between official documentation and the real-world behavior of underactuated joints by analyzing data from the hand and capturing the kinematic relationships.",
    tags: ["StatisticalModeling", "DataAnalysis", "Python", "MachineLearning", "Regression", "SensorData", "ParameterEstimation", "DataDriven"],
    image: statToUseNewImage
  },
  {
    year: "2024",
    type: "Project",
    title: "Mathematical and Physical Modeling of Object–Hand Interaction",
    description: "Developed and simulated mathematical and physical models of object–hand interaction, including contact geometry, curvatures, rolling dynamics, and force constraints for realistic manipulation. Validated accuracy with numerical analysis and Mujoco simulations.",
    tags: ["Dynamics", "StabilityAnalysis", "PhysicsBasedModeling", "MathematicalModeling", "ConstraintProgramming", "NumericalAnalysis"],
    image: contact1Image
  },
  {
    year: "2023",
    type: "Other",
    title: "Public Speaking - Algorithms in Autonomous Mobile Robots",
    description: "Delivered presentation on algorithms in autonomous robots with Johan S. Laursen from Danish Technological Institute. Covered navigation algorithms, mapping, path planning, and obstacle avoidance. Explored what makes algorithms good or bad, and how mathematical approaches drive robotic decision-making.",
    tags: ["PublicSpeaking", "Algorithms", "Navigation", "PathPlanning", "SLAM", "Mathematics"],
    image: spotImage
  },
  {
    year: "2023",
    type: "Job",
    title: "PhD Student in Robotics",
    description: "Conducting research in robotics with a focus on robotic manipulation, underactuated systems, and intelligent control. Developing mathematical models, implementing novel algorithms, and validating results through simulation and real-world experiments.",
    tags: ["Robotics", "AlgorithmDevelopment", "Simulation", "ExperimentalValidation", "Automation", "RobotControl"],
    image: roboticHandVideo
  },
  {
    year: "2023",
    type: "Other",
    title: "Teaching - Underactuated Robotics",
    description: "Taught undergraduate course covering control and dynamics of robots with more degrees of freedom than control inputs (e.g., drones, walking robots, ballbots). Emphasized exploiting natural dynamics, modern control strategies, and hands-on advanced control design.",
    tags: ["Teaching", "UnderactuatedRobotics", "ControlTheory", "Dynamics", "Robotics", "EngineeringEducation"],
    image: teachingUnderactuatedRoboticsImage
  },
  {
    year: "2022",
    type: "Project",
    title: "Christmas Coding Event - 2D Podracing Game",
    description: "Organized a Christmas coding event. Developed a 2D podracing game engine where participants programmed bots to compete in algorithmic challenges. Designed as a programming competition that blended gaming with hands-on algorithmic problem-solving.",
    tags: ["SideProject", "GameDevelopment", "CodingCompetition", "AlgorithmicChallenge", "EventOrganization"],
    image: christmasCodingFootballGif
  },
  {
    year: "2022",
    type: "Job",
    title: "Postdoc in Computer Science",
    description: "Developed algorithms and theoretical frameworks for ensuring robust network connectivity under failures. In addition to research, taught graduate course in graph theory.",
    tags: ["SurvivableNetworkDesign", "GraphAlgorithms", "Connectivity", "CombinatorialOptimization"],
    image: networkAlgorithmsPurpleImage
  },
  {
    year: "2021",
    type: "Job",
    title: "PhD in Computer Science",
    description: "Dissertation addressed NP-hard network design problems with real-world applications in transportation, communication, and social networks, developing methods to enable more reliable and cost-effective systems under practical constraints.",
    tags: ["NetworkDesign", "AppliedAlgorithms", "Connectivity", "Optimization", "Infrastructure", "GraphTheory", "ParameterizedComplexity"],
    image: phdDissertationImage
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Project":
      return {
        bg: "bg-green-500",
        text: "text-green-500",
        border: "border-green-500"
      };
    case "Job":
      return {
        bg: "bg-blue-500", 
        text: "text-blue-500",
        border: "border-blue-500"
      };
    case "Other":
      return {
        bg: "bg-purple-500",
        text: "text-purple-500", 
        border: "border-purple-500"
      };
    default:
      return {
        bg: "bg-gray-500",
        text: "text-gray-500",
        border: "border-gray-500"
      };
  }
};

const Timeline = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border rounded-full transform -translate-x-1/2 hidden md:block"></div>

          <div>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const colors = getTypeColor(item.type);
              
              return (
                <div key={index} className={`relative flex items-center ${index > 0 ? '-mt-32' : ''}`}>
                  {/* Timeline dot - positioned at top of post */}
                  <div className={`absolute left-1/2 w-4 h-4 ${colors.bg} rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block top-4`}></div>
                  
                  {/* Connecting line from post to dot - positioned at top of post */}
                  <div className={`absolute w-6 h-0.5 bg-border z-10 hidden md:block top-4 transform -translate-y-1/2 ${
                    isLeft 
                      ? 'right-1/2 mr-2' 
                      : 'left-1/2 ml-2'
                  }`}></div>
                  
                  {/* Content container */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:mr-0' : 'md:pl-8 md:ml-auto'}`}>
                    <Card className="overflow-hidden card-shadow hover:glow-shadow transition-all duration-300 relative bg-card">
                      {/* Colored side indicator */}
                      <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 ${colors.bg}`}></div>
                      
                      {/* Project image/video at the top */}
                      <div className={`w-full overflow-hidden bg-muted ${
                        // Posts 0,1,2,3,6,8,9 get half height (h-32), others keep full height (h-64)
                        [0,1,2,3,6,8,9].includes(index) ? 'h-32' : 'h-64'
                      }`}>
                        {item.title === "PhD Student in Robotics" ? (
                          <video 
                            src={item.image} 
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            onLoadedData={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.playbackRate = 0.6;
                            }}
                            onTimeUpdate={(e) => {
                              const video = e.target as HTMLVideoElement;
                              if (video.currentTime >= 3.5) {
                                video.currentTime = 0;
                              }
                            }}
                          />
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-sm font-medium ${colors.text} uppercase tracking-wider`}>
                            {item.type}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.year}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        {/* GitHub link for Hafnian project */}
                        {item.title === "Hafnian Computation Algorithm – Python Implementation" && (
                          <div className="mb-4 relative z-10">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 px-2 text-xs relative z-20 bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              onClick={() => {
                                window.open("https://github.com/Kristine23/Hafnian", "_blank", "noopener,noreferrer");
                              }}
                            >
                              <Code size={12} className="mr-1" />
                              Code
                            </Button>
                          </div>
                        )}
                        
                        {/* GitHub link for Christmas coding event */}
                        {item.title === "Christmas Coding Event - 2D Podracing Game" && (
                          <div className="mb-4 relative z-10">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 px-2 text-xs relative z-20 bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              onClick={() => {
                                console.log("Button clicked!");
                                window.open("https://github.com/Kristine23/Coding-Game", "_blank", "noopener,noreferrer");
                              }}
                            >
                              <Code size={12} className="mr-1" />
                              Code
                            </Button>
                          </div>
                        )}
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="secondary"
                              className="text-xs bg-muted text-black hover:bg-muted/80 px-2 py-1"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
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