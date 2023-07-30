'use client'
import { useState ,useEffect} from "react";

interface ClientOnlyProps{
    children: React.ReactNode;
}

export const ClientOnly:React.FC<ClientOnlyProps> = ({
    children
}) => {
  const [hasMounted ,sethasMounted]=useState(false);

  useEffect(()=>{
    sethasMounted(true);
  },[]);

  if(!hasMounted){
    return null;
  }
    return (
    <div>{children}</div>
  )
}
