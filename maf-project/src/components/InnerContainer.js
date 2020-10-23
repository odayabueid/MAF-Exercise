import React, { Component } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeautyStars from 'beauty-stars';

class InnerContainer extends Component {

  state = {
    villasDataArr: [
      { villaLocation: "2100 West Littleton Blvd Littleton, CO 80120", villaPrice: '730K$', villaName: 'The Croft', villaImage: 'https://cdn.villaway.com/202303/external/596951cda0ca05aa32167013/bg_tn_y0i1vuyc15_202303.jpg' },
      { villaLocation: '3541 North California  CTO, CO 85265', villaPrice: '780K$', villaName: 'The Sunnyside', villaImage: 'https://icon-invest.com/images/properties/57_1534933188_5swDUR5x.jpg' },
    ],
    indicators: true,
    indicatorsChecked: true,
    navButtonsAlwaysVisible: false,
    autoPlay: false,
    animationRadio: 'fade',
  }

  componentDidUpdate = (prevProps, props) => {
    if (prevProps.villas !== this.props.villas) {
      this.setState({
        villasDataArr: this.props.villas
      })
    }
  }

  handleChange = (name, event) => {
    console.log(event.target.checked)
    this.setState({
      [name]: event.target.checked
    }, () => {
      this.handleCarousel(name, event)
    })

  }

  handleCarousel = (name, event) => {
    console.log(name)
    if (name == 'indicatorsChecked') {
      if (event.target.checked) {
        this.setState({
          indicators: true
        })
      } else {
        this.setState({
          indicators: false
        })
      }
    }
    if (name == 'navButtonsAlwaysVisible') {
      if (event.target.checked) {
        this.setState({
          navButtonsAlwaysVisible: true
        })
      } else {
        this.setState({
          navButtonsAlwaysVisible: false
        })
      }
    }
    if (name == 'autoPlay') {
      if (event.target.checked) {
        this.setState({
          autoPlay: true
        })
      } else {
        this.setState({
          autoPlay: false
        })
      }
    }
  }
  handleRadioChange = (event) => {
    if (event.target.value == 'fade') {
      this.setState({
        animationRadio: 'fade'
      })
    }
    if (event.target.value == 'slide') {
      this.setState({
        animationRadio: 'slide'
      })
    }
  }

  render() {
    return (
      <div>
        <div class="grid grid-cols-1 gap-4">
          <Carousel interval={this.state.intervalAutoPlay} indicators={this.state.indicators} navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible} autoPlay={this.state.autoPlay} animation={this.state.animationRadio}>
            {
              this.state.villasDataArr.map((item, i) => {
                var index = i + 1
                return <Paper style={{ maxHeight: "600px" }}>

                  <img src={item.villaImage} style={{ objectFit: 'cover', width: '100%', height: "500px" }} />
                  <div class="grid grid-cols-1 gap-4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Show Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div class="grid grid-cols-3 gap-4">
                          <Typography>
                            Villa Name : {item.villaName}
                          </Typography>
                          <Typography>
                            Villa Price : {item.villaPrice}
                          </Typography>
                          <Typography>
                            Villa Location :{item.villaLocation}
                          </Typography>
                          <BeautyStars
                            value={index + 2}
                            size="15px"
                            onChange={value => this.setState({ value })}
                          />
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  {/* <details>
                    <summary>Epcot Center</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                  </details> */}
                  {/* <h2>{item.villaLocation}</h2>
                  <p>{item.villaName}</p> */}
                </Paper>
              })
            }
          </Carousel>
        </div>
        <div class="grid grid-cols-5 gap-4">
          <FormControlLabel
            control={<Checkbox
              checked={this.state.indicatorsChecked}
              onChange={(event) => this.handleChange('indicatorsChecked', event)}
            />}
            label="Indecators"
          />
          <FormControlLabel
            control={<Checkbox
              checked={this.state.navButtonsAlwaysVisible}
              onChange={(event) => this.handleChange('navButtonsAlwaysVisible', event)}
            />}
            label="Visible Buttons"
          />
          <FormControlLabel
            control={<Checkbox
              checked={this.state.autoPlay}
              onChange={(event) => this.handleChange('autoPlay', event)}
            />}
            label="Auto-Play"
          />
          <RadioGroup value={this.state.animationRadio} onChange={this.handleRadioChange}>
            <div class="grid grid-cols-2 ">
              <FormControlLabel value="fade" control={<Radio />} label="Fade" />
              <FormControlLabel value="slide" control={<Radio />} label="Slide" />
            </div>
          </RadioGroup>
        </div>
      </div>
    )
  }
}
export default InnerContainer