import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { ThreeLines } from '../../../icons/icons';

export default function ListTaps() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className='p-4 w-full h-lvh flex flex-col gap-4 items-center bg-primary text-white font-Rammetto'>
        {['home', 'products', 'about-us', 'contact'].map((text) => (
          <a href={`#${text}`} key={text}>
            {text.toUpperCase()}
          </a>
        ))}
      </div>
    </Box>
  );

  return (
    <div className='block md:hidden'>
      <Button onClick={toggleDrawer(true)}>
        <ThreeLines />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor={"right"}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
