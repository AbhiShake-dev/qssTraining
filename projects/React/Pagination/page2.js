import React,{Component} from 'react';
import './index.css';
class page2 extends React.Component {
    onSubmit = () => {
      this.props.history.push('/')
    }  
    render() {
      return (
        <table>
        <tr>
          <th>S.No.</th>
          <th>Firstname</th>
          <th>Lastname</th> 
          <th>Age</th>
        </tr>
        <tr>
        <td>11</td>
          <td>Gautam</td>
          <td>singh</td>
          <td>32</td>
        </tr>
        <tr>
        <td>12</td>
          <td>Danish</td>
          <td>sharma</td>
          <td>74</td>
        </tr>
        <tr>
        <td>13</td>
          <td>kumar</td>
          <td>sangkara</td>
          <td>42</td>
        </tr>
      
        <tr>
        <td>14</td>
          <td>Lasith</td>
          <td>malinga</td>
          <td>34</td>
        </tr>
        <tr>
        <td>15</td>
          <td>Virat</td>
          <td>kohli</td>
          <td>32</td>
        </tr>
        <tr>
        <td>16</td>
          <td>Sikhar</td>
          <td>dhawan</td>
          <td>30</td>
        </tr>
      
        <tr>
        <td>17</td>
          <td>Hardik</td>
          <td>pandya</td>
          <td>28</td>
        </tr>
        <tr>
        <td>18</td>
          <td>Krunal</td>
          <td>pandya</td>
          <td>29</td>
        </tr>
        <tr>
        <td>19</td>
          <td>Vikrant</td>
          <td>gupta</td>
          <td>35</td>
        </tr>
        <tr>
        <td>20</td>
          <td>Abhishek</td>
          <td>tiwari</td>
          <td>23</td>
        </tr>
      </table>
      )
    }
  }export default page2