import React from "react";
import styles from './skill.module.css'
import { T } from "..";

interface SkillProps {
    name: string;
    level: number; 
    color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
    return (
        <div className={styles.contianer} style= {{ width: "378px", marginBottom: "12px" }
}>
    <div className={styles.text}>
        <T font="sans" weight="bold" size="m2" color="white" >{name}</T>
        <T font="mono" weight="bold" size="m1" color={color} >{`${level}%`}</T>
    </div>

        < div
style = {{
    width: "100%",
        height: "16px",
            border: `2px solid #777575`,
                borderRadius: "2px",
                    overflow: "hidden",
        }}>
    <div
          style={
    {
        width: `${level}%`,
            height: "100%",
                backgroundColor: color,
                    transition: "0.4s ease",
          }
}
        />
    </div>
    </div>
  );
};

export default SkillBar;