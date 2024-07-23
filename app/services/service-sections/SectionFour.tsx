import gear from '@/app/assets/icons/gears.png'
import project_management from '@/app/assets/icons/project-management.png'

const keypoints = [
  {
    heading: "Process Reengineering",
    text: "We redesign your existing processes to eliminate inefficiencies and enhance productivity, allowing you to do more with less.",
    icon: gear
  },
  {
    heading: "Lean Management",
    text: "Our lean management practices instil a philosophy of continuous improvement, ensuring sustained enhancements in efficiency and quality.",
    icon: project_management
  }
]

export default function SectionFour() {
  return (
    <div>
      <div>
        <h2>Operational Efficiency</h2>
        <p>Enhance your company&apos;s productivity and efficiency with our Operational Efficiency services. We focus on streamlining processes and implementing lean practices that significantly reduce waste and enhance value to your customers.</p>
      </div>
    </div>
  )
}