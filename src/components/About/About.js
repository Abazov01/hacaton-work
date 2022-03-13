import React,{useEffect} from 'react';
import './About.css'
import * as Reactt from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useContext } from 'react';
import { AllContetxt, UserContext } from '../../UserContext';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCF2mbOdm7-g4NLcC6crNrBwMULgrcjA60g&usqp=CAU',
  },
  {
    label: 'Bird',
    imgPath:
      'https://basetop.ru/wp-content/uploads/2019/04/1nhlmtek.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export default function About() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = Reactt.useState(0);
  const maxSteps = images.length;
  const {all, setAll} = useContext(AllContetxt)
  const {info,setInfo} = useContext(UserContext)
  
  
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  useEffect(()=>{
    AOS.init({
      odset:100,
      duration:1000,
      easing:'ease',
      once:true,
    })
  })
  useEffect(()=>{
    let token = localStorage.getItem('token')
    console.log(all);
    console.log(token);
    token ? setInfo(true): setInfo(false)
  },[all])

  return (

        <div className='about'>
          <div className="container">
          <div className="about__us">
            <p id='history'>Наша История</p>
            <div className="about__us_all">
              

              <p className='text'>Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolorum fuga iusto quam pariatur inventore aliquam accusamus tenetur exercitationem iure aliquid reprehenderit, officiis esse consectetur quia quisquam voluptas a. Veritatis, vel! Porro voluptatibus voluptatum sequi eos! Aliquam mollitia magni quae. Numquam illum, quidem consequatur ad incidunt distinctio laudantium. Tenetur, fugiat.</p>

              <img id='about_img' src="https://chankete.com/wp-content/uploads/2021/11/icon-01.png" alt="" />

            </div>

              <img id='img' data-aos='flip-left' src="https://img03.rl0.ru/afisha/o/www.afisha.ru/uploads/images/c/3e/c3e7e102365a4a7f946d3d9a4c9a2368.jpg" alt="" />
          </div>

          <div className="about__comments">
            <p id='comments'>Отзывы о нашем ресторане</p>

            <div className="comments__all">

            <div className="comments__col-3">
              <p className='text'>Ужинали с партнёрами в данном ресторане. Ресторан реально высокой кухни - от приготовления блюд, до оформления с подачей. Все изысканно и вкусно. Стейки - шикарные, заказывал прожарку медиум-велл, принесли точно, что и просил. Ну и приятно удивили цены - очень демократично. </p>
              <img src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960" alt="" />
              <h3>Evgeny R.</h3>
            </div>

            <div className="comments__col-3">
              <p className='text'>Искали в интернете где поужинать и по совету местных коллег пришли сюда. Очень красивые интерьеры, отличное меню, авторские десерты и чаи. Нам повели экскурсию по всему ресторану удивительно красивое место. В целом - очень приятные впечатления от ресторана, в следующий раз зайдем .</p>
              <img src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg" alt="" />
              <h3>Anna N.</h3>
            </div>

            <div className="comments__col-3">
              <p className='text'>Зашли быстро покушать, а просидели в удовольствие три часа))) еда и десерты вкусные, обстановка уютная. Сидели на улице, есть столики и отдельные шатры со шторками. После 20.00 живая музыка. Внутри здания очень респектабельные интерьеры, есть два зала больших и маленькие залы.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKjGxrT5SVZyo98SntDFL-rlk5aSJJytZfA&usqp=CAU" alt="" />
              <h3>Olivia W.</h3>
            </div>

            </div>

            </div>

          </div>
          <div className="corusel">
            <Box sx={{ maxWidth: 8000, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: 10000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
          </div>

        </div>
  )
}