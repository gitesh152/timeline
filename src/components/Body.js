import { Tooltip } from 'bootstrap';
import React, { Component } from 'react';
import './index.css';
import Example from './Model';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          id: 1,
          title: 'conceptulize',
          bg: 'rgb(234 85 69)',
          describe: `Define site's purpose and strategy. What is Aim and Motto? It should be detailed or short summary.`,
          imgSrc:
            'https://previews.123rf.com/images/rawpixel/rawpixel1607/rawpixel160701553/59226662-conceptualize-ideas-creative-design-invention-concept.jpg',
          dueDate: '31/JAN/2018',
          assignedTo: 'Raghav Chaddha',
          lastUpdatedAt: '29/JAN/2018',
          lastUpdatedBy: 'Mihir Bhoj',
        },

        {
          id: 2,
          title: 'sketch',
          bg: 'rgb(234 85 69)',
          describe:
            'Writing down the steps or making the sktech of the task of making website.',
          imgSrc:
            'https://previews.123rf.com/images/ra2studio/ra2studio1912/ra2studio191200949/135244628-pencil-drawing-online-task-management-concept.jpg',
          dueDate: '05/FEB/2018',
          assignedTo: 'Viraj Mehta',
          lastUpdatedAt: '03/FEB/2018',
          lastUpdatedBy: 'Viraj Mehta',
        },
        {
          id: 3,
          title: 'color profiles',
          bg: 'rgb(234 85 69)',
          describe: 'Selecting the color choices and pallates.',
          imgSrc:
            'https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-wheel-triadic.svg',
          dueDate: '08/FEB/2018',
          assignedTo: 'Menna Roy',
          lastUpdatedAt: '06/FEB/2018',
          lastUpdatedBy: 'Shruti verma',
        },
        {
          id: 4,
          title: 'HTML',
          bg: 'rgb(236 117 47)',
          describe: 'Developing the basic structure of website. Writing HTML.',
          imgSrc:
            'https://kinsta.com/wp-content/uploads/2021/11/Untitled-54.png',
          dueDate: '05/FEB/2018',
          assignedTo: 'Darshan Pal',
          lastUpdatedAt: '04/FEB/2018',
          lastUpdatedBy: 'Ragini Mishra',
        },
        {
          id: 5,
          title: 'write the JS',
          bg: 'rgb(236 117 47)',
          describe:
            'Adding interaction and dynamics to our website, adding javascript.',
          imgSrc:
            'https://miro.medium.com/max/1400/1*GZVZL5QWWlXcAt7r98XRbg.png',
          dueDate: '08/FEB/2018',
          assignedTo: 'Vivek Rajdhan',
          lastUpdatedAt: '07/FEB/2018',
          lastUpdatedBy: 'Satvik Gupta',
        },
        {
          id: 6,
          title: 'advertise',
          bg: 'rgb(228 148 26)',
          describe:
            'The advertise portion describe the type of markating behavour of our website.',
          imgSrc:
            'https://d2zm6ltkguvwr7.cloudfront.net/wp-content/uploads/2013/05/LinkedInAds.png.webp',
          dueDate: '11/FEB/2018',
          assignedTo: 'Raghav Chaddha',
          lastUpdatedAt: '10/FEB/2018',
          lastUpdatedBy: 'Mihir Bhoj',
        },
        {
          id: 7,
          title: 'spam links',
          bg: 'rgb(228 148 26)',
          describe:
            'Spam Link is the posting of out-of-context links on website. Like route to unwanted website or irrevelent contexts.',
          imgSrc:
            'https://jonrognerud.com/wp-content/uploads/2011/04/email-link-spam-notice.gif',
          dueDate: '13/FEB/2018',
          assignedTo: 'Manav Dubey',
          lastUpdatedAt: '12/FEB/2018',
          lastUpdatedBy: 'Manav Dubey',
        },
        {
          id: 8,
          title: 'eat',
          bg: 'rgb(213 179 22)',
          describe:
            'Testing our website to see outcome of error, bad codes and layouts.',
          imgSrc:
            'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/04/WebTesting-Overview.jpg',
          dueDate: '12/FEB/2018',
          assignedTo: 'Testing Team',
          lastUpdatedAt: '10/FEB/2018',
          lastUpdatedBy: 'Mihir Bhoj',
        },
        {
          id: 9,
          title: 'Delivery Task',
          bg: 'rgb(213 179 22)',
          describe: 'Delivery of the product website to the client.',
          imgSrc:
            'https://www.superoffice.com/globalassets/blog/2012/10/good-customer-service.jpg',
          dueDate: '15/FEB/2018',
          assignedTo: 'Mihir Bhoj',
          lastUpdatedAt: '13/FEB/2018',
          lastUpdatedBy: 'Mihir Bhoj',
        },
      ],
    };
  }

  render() {
    return (
      <div className="body">
        <div className="container my-2">
          <table className="w-100 text-center" id="tab">
            <tbody>
              <tr>
                <td colSpan="3"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td colSpan="4">
                  <Example {...this.state.arr[0]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3">Enquiry</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="5">
                  <Example {...this.state.arr[1]} />
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="3">
                  <Example {...this.state.arr[2]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  colSpan="3"
                  rowSpan="2"
                  style={{ borderRight: '1px solid rgb(107, 76, 76)' }}
                >
                  Booking
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="4">
                  <Example {...this.state.arr[3]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={{ borderLeft: '1px solid rgb(107, 76, 76)' }}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="3">
                  <Example {...this.state.arr[4]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3" rowSpan="2">
                  Retail
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="3">
                  <Example {...this.state.arr[5]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={{ borderLeft: '1px solid rgb(107, 76, 76)' }}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="2">
                  <Example {...this.state.arr[6]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3" rowSpan="2">
                  Delivery
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td colSpan="5">
                  <Example {...this.state.arr[7]} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                {/* <td colSpan="3">Ye</td> */}
                <td style={{ borderLeft: '1px solid rgb(107, 76, 76)' }}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="3">
                  <Example {...this.state.arr[8]} />
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td>28 Jan</td>
                <td>29 Jan </td>
                <td>30 Jan</td>
                <td>31 Jan</td>
                <td>01 Feb</td>
                <td>02 Feb</td>
                <td>03 Feb</td>
                <td>04 Feb</td>
                <td>05 Feb</td>
                <td>06 Feb</td>
                <td>07 Feb</td>
                <td>08 Feb</td>
                <td>09 Feb</td>
                <td>10 Feb</td>
                <td>11 Feb</td>
                <td>12 Feb</td>
                <td>13 Feb</td>
                <td>14 Feb</td>
                <td>15 Feb</td>
                <td>16 Feb</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Body;
