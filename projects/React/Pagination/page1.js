import React,{Component} from 'react';
import './index.css'
class page1 extends React.Component {
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
  <td>1</td>
    <td>Ramesh</td>
    <td>jain</td>
    <td>50</td>
  </tr>
  <tr>
  <td>2</td>
    <td>Rakesh</td>
    <td>verma</td>
    <td>94</td>
  </tr>
  <tr>
  <td>3</td>
    <td>Mohan</td>
    <td>lal</td>
    <td>80</td>
  </tr>

  <tr>
  <td>4</td>
    <td>Ram</td>
    <td>kumar</td>
    <td>54</td>
  </tr>
  <tr>
  <td>5</td>
    <td>Laxman</td>
    <td>verma</td>
    <td>97</td>
  </tr>
  <tr>
  <td>6</td>
    <td>Sanjiv</td>
    <td>bosh</td>
    <td>87</td>
  </tr>

  <tr>
  <td>7</td>
    <td>Kamal</td>
    <td>nath</td>
    <td>30</td>
  </tr>
  <tr>
  <td>8</td>
    <td>Ram</td>
    <td>lakhan</td>
    <td>23</td>
  </tr>
  <tr>
  <td>9</td>
    <td>Vikku</td>
    <td>Deo</td>
    <td>23</td>
  </tr>
  <tr>
  <td>10</td>
    <td>Gaurav</td>
    <td>singh</td>
    <td>24</td>
  </tr>
</table>
      )
    }
  }export default page1