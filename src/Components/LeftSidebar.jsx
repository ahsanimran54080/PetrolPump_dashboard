import React, { useState } from 'react';
import { data } from './SidebarData';


const LeftSidebar = () => {
    const [Index, setIndex] = useState(0);

    const handleActive = (e) => {
        setIndex(e)
    }
    return (
        <div className="leftsidebar">
            <div className="sidebar-items">
                <div className='slidermain'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} onClick={() => handleActive(index)} className={index === Index ? "active" : ""}>
                                {item.icon} {/* Use the icon component directly */}
                                <span>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
