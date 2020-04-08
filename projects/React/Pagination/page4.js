import React,{Component} from 'react';
import './index.css';
class page4 extends React.Component {
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
        <td>31</td>
          <td>Sachin</td>
          <td>tendulkar</td>
          <td>45</td>
        </tr>
        <tr>
        <td>32</td>
          <td>K L</td>
          <td>rahul</td>
          <td>28</td>
        </tr>
        <tr>
        <td>33</td>
          <td>Rishabh</td>
          <td>pant</td>
          <td>25</td>
        </tr>
      
        <tr>
        <td>34</td>
          <td>Bhuvneshwar</td>
          <td>kumar</td>
          <td>31</td>
        </tr>
        <tr>
        <td>35</td>
          <td>Irfan</td>
          <td>pathan</td>
          <td>36</td>
        </tr>
        <tr>
        <td>36</td>
          <td>Yusuf</td>
          <td>pathan</td>
          <td>37</td>
        </tr>
      
        <tr>
        <td>37</td>
          <td>Shreyas</td>
          <td>iyyar</td>
          <td>26</td>
        </tr>
        <tr>
        <td>38</td>
          <td>Ravindra</td>
          <td>jadeja</td>
          <td>31</td>
        </tr>
        <tr>
        <td>39</td>
          <td>Ravichandran</td>
          <td>ashwin</td>
          <td>33</td>
        </tr>
        <tr>
        <td>40</td>
          <td>Suresh</td>
          <td>raina</td>
          <td>32</td>
        </tr>
      </table>
      )
    }
  }export default page4