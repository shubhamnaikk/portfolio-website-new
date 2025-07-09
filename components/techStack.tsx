"use client"

import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"

const skills = [
  { name: "Python", src: "https://img.icons8.com/color/96/000000/python--v1.png" },
  { name: "SQL", src: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" },
  { name: "Java", src: "https://img.icons8.com/color/96/java-coffee-cup-logo.png" },
  { name: "Pandas", src: "https://img.icons8.com/color/96/pandas.png" },
  { name: "NumPy", src: "https://img.icons8.com/color/96/numpy.png" },
  { name: "TensorFlow", src: "https://img.icons8.com/color/96/tensorflow.png" },
  { name: "PyTorch", src: "https://www.pikpng.com/pngl/m/297-2979964_pytorch-first-step-pytorch-logo-png-clipart.png" },
  { name: "Power BI", src: "https://img.icons8.com/color/96/power-bi.png" },
  { name: "Tableau", src: "https://img.icons8.com/color/96/tableau-software.png" },
  { name: "JavaScript", src: "https://img.icons8.com/color/96/javascript--v1.png" },
  { name: "TypeScript", src: "https://img.icons8.com/color/96/typescript.png" },
  { name: "React", src: "https://img.icons8.com/color/96/react-native.png" },
  { name: "Node.js", src: "https://img.icons8.com/color/96/nodejs.png" },
  { name: "Docker", src: "https://img.icons8.com/color/96/docker.png" },
  { name: "Kubernetes", src: "https://img.icons8.com/color/96/kubernetes.png" },
  { name: "AWS", src: "https://img.icons8.com/color/96/amazon-web-services.png" },
  { name: "Terraform", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3yP8N1mLoNDdo2gkMzRQfwMpw3ZjiGZeoQ&s" },
  { name: "Git", src: "https://img.icons8.com/color/96/git.png" },
  { name: "Apache Spark", src: "https://img.icons8.com/color/96/apache-spark.png" },
  { name: "Kafka", src: "https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000" },
  { name: "Airflow", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzCIuPsPokbP-V0RFFgCRJqcve5gpjJmTtg&s" },
  { name: "dbt", src: "https://images.seeklogo.com/logo-png/43/1/dbt-logo-png_seeklogo-431111.png" },
  { name: "Hadoop", src: "https://img.icons8.com/color/96/hadoop-distributed-file-system.png" },
  { name: "Snowflake", src: "https://www.pikpng.com/pngl/m/124-1245406_periscope-data-partners-snowflake-computing-logo-clipart.png" },
  { name: "PostgreSQL", src: "https://img.icons8.com/color/96/postgreesql.png" },
  { name: "MongoDB", src: "https://img.icons8.com/color/96/mongodb.png" },
]

export function TechHighlight() {
  return (
    <HeroHighlight>
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* 📝 Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-sans text-neutral-700 dark:text-white text-center leading-relaxed"
        >
          Stacks That Make It  {" "} 
          <Highlight className="text-black font-semibold dark:text-white">Happen</Highlight>
        </motion.h1>

        {/* 🧠 Responsive Skills Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 mt-4 px-2 sm:px-0">
  {skills.map((skill) => (
    <div key={skill.name} className="flex flex-col items-center text-center">
      <img
        src={skill.src}
        alt={skill.name}
        className="h-12 w-12 object-contain mb-1"
      />
      <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">{skill.name}</span>
    </div>
  ))}
</div>

      </div>
    </HeroHighlight>
  )
}
