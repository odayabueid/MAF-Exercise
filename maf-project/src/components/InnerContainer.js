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
import villasData from '../data.json'

class InnerContainer extends Component {

  state = {
    villasDataArr: [],
    indicators: true,
    indicatorsChecked: true,
    navButtonsAlwaysVisible: false,
    autoPlay: false,
    animationRadio: 'fade',
  }

  componentDidMount = () => {
    var villasDataArr = []
    villasData.villas.forEach(el => {
      if (el.villaPrice < 800000) {
        villasDataArr.push(el)
      }
    })
    this.setState({
      villasDataArr: villasDataArr
    })
  }

  componentDidUpdate = (prevProps, props) => {
    if (prevProps.villas !== this.props.villas) {
      this.setState({
        villasDataArr: this.props.villas
      })
    }
  }

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.checked
    }, () => {
      this.handleCarousel(name, event)
    })

  }

  handleCarousel = (name, event) => {
    if (name === 'indicatorsChecked') {
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
    if (name === 'navButtonsAlwaysVisible') {
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
    if (name === 'autoPlay') {
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
    if (event.target.value === 'fade') {
      this.setState({
        animationRadio: 'fade'
      })
    }
    if (event.target.value === 'slide') {
      this.setState({
        animationRadio: 'slide'
      })
    }
  }

  render() {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4">
          <Carousel interval={this.state.intervalAutoPlay} indicators={this.state.indicators} navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible} autoPlay={this.state.autoPlay} animation={this.state.animationRadio}>
            {
              this.state.villasDataArr.map((item, i) => {
                var index = i + 1
                return <Paper key={i + 1} style={{ maxHeight: "600px" }}>

                  <img src={item.villaImage} style={{ objectFit: 'cover', width: '100%', height: "500px" }} />
                  <div className="grid grid-cols-1 gap-4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={styles.accordion}
                      >
                        <Typography>Show Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails style={styles.accordionDetails}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" style={{ height: "50px", overflowY: 'auto', width: "100%" }}>
                          <Typography>
                            Name : {item.villaName}
                          </Typography>
                          <Typography>
                            Price : {item.villaPrice}
                          </Typography>
                          <BeautyStars
                            value={index + 2}
                            size="15px"
                            onChange={value => this.setState({ value })}
                          />
                          <Typography>
                            {item.villaLocation}
                          </Typography>

                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Paper>
              })
            }
          </Carousel>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <FormControlLabel
            control={<Checkbox
              style={styles.checkBoxStyle}
              checked={this.state.indicatorsChecked}
              onChange={(event) => this.handleChange('indicatorsChecked', event)}
            />}
            label="Indecators"
          />
          <FormControlLabel
            control={<Checkbox
              checked={this.state.navButtonsAlwaysVisible}
              style={styles.checkBoxStyle}
              onChange={(event) => this.handleChange('navButtonsAlwaysVisible', event)}
            />}
            label="Visible Buttons"
          />
          <FormControlLabel
            control={<Checkbox
              style={styles.checkBoxStyle}
              checked={this.state.autoPlay}
              onChange={(event) => this.handleChange('autoPlay', event)}
            />}
            label="Auto-Play"
          />
          <RadioGroup value={this.state.animationRadio} onChange={this.handleRadioChange}>
            <div className="grid grid-cols-2 ">
              <FormControlLabel value="fade" control={<Radio style={styles.checkBoxStyle}
              />} label="Fade" />
              <FormControlLabel value="slide" control={<Radio style={styles.checkBoxStyle}
              />} label="Slide" />
            </div>
          </RadioGroup>
        </div>
      </div>
    )
  }
}
export default InnerContainer

const styles = {
  accordion: {
    backgroundColor: "#eee"
  },
  accordionDetails: {
    color: "#31261d",
    borderTop: '1px solid #ccc',

  },
  checkBoxStyle: {
    color: "#b39759"
  }

}