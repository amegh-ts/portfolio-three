"use client";

import { Ground } from "./Ground";
import { Car } from "./Car";
import { CameraController } from "./CameraController";
import { SectionTrigger } from "./SectionTrigger";
import { SectionPanel } from "./SectionPanel";

export const Scene = () => {
  return (
    <>
      <Ground />
      <Car />
      <CameraController />

      <SectionTrigger position={[8, 0, 0]} label="About" />
      <SectionPanel position={[8, 0, 0]} label="About" />

      <SectionTrigger position={[-8, 0, 0]} label="Projects" />
      <SectionPanel position={[-8, 0, 0]} label="Projects" />

      <SectionTrigger position={[0, 0, -10]} label="Contact" />
      <SectionPanel position={[0, 0, -10]} label="Contact" />
    </>
  );
};
