import { Text } from '@mantine/core';
import classes from './Title.module.css';

export const Title = () => (
  // TEXT COLOR I LIKE: text-[1A1F2C] <- dark red - text-red-400
  //drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
  <div className="container">
    <Text className={classes.title} ta="center" mt={100}>
      Welcome to Open
      <Text inherit variant="gradient" component="span" gradient={{ from: 'orange', to: 'blue' }}>
        MYC
      </Text>
    </Text>
    <Text className={classes.subtitle} ta="center">
      The easiest way to find comedy open mics in the 5 Boroughs
    </Text>
  </div>
);
