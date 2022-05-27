import useScrollTrigger from '@mui/material/useScrollTrigger'
import { IHeaderProps } from '@/interfaces/Iheader.dashboard';
import Slide from '@mui/material/Slide'

const HideOnScroll = (props: IHeaderProps) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

export default HideOnScroll