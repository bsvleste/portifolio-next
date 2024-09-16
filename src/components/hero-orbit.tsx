import { Sparkle } from "lucide-react";
import { PropsWithChildren } from "react";

export function HeroOrbit({ children, size, rotation = 0 }: PropsWithChildren<{ size: number; rotation?: number }>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}>
        <div className="inline-flex   ">
          {children}
        </div>
      </div>
    </div>
  )
}