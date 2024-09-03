"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import RenderIf from "@/components/RenderIf";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          <RenderIf isRender={!isSetupComplete}>
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          </RenderIf>

          <RenderIf isRender={isSetupComplete}>
            <MeetingRoom />
          </RenderIf>
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
