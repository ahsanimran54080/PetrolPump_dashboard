import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { data } from './SidebarData';
const AppDrawer = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
    return (
        <>
            {/* <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group>
            </Space> */}
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <div className="sidebar-items">
                    <div className='slidermain'>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.icon} {/* Use the icon component directly */}
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Drawer>
        </>
    );
};
export default AppDrawer;