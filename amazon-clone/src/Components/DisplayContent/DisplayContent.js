import React from 'react';
import './DisplayContent.css';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';
export default function DisplayContent() {
  return (
    <div className='displayContent_main'>
        <div>
            <LeftSidePanel />
        </div>
        <div>
            <RightSidePanel />
        </div>
    </div>
  )
}
