import React,{Component} from 'react';
import './index.css';
class page5 extends React.Component {
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
        <td>41</td>
          <td>Yuvraj</td>
          <td>singh</td>
          <td>38</td>
        </tr>
        <tr>
        <td>42</td>
          <td>Khalil</td>
          <td>ahmad</td>
          <td>25</td>
        </tr>
        <tr>
        <td>43</td>
          <td>Navdip</td>
          <td>saini</td>
          <td>24</td>
        </tr>
      
        <tr>
        <td>44</td>
          <td>Kuldeep</td>
          <td>yadav</td>
          <td>27</td>
        </tr>
        <tr>
        <td>45</td>
          <td>Yajuvendra</td>
          <td>chahal</td>
          <td>26</td>
        </tr>
        <tr>
        <td>46</td>
          <td>Rahul</td>
          <td>chahar</td>
          <td>23</td>
        </tr>
      
        <tr>
        <td>47</td>
          <td>Deepak</td>
          <td>chahar</td>
          <td>25</td>
        </tr>
        <tr>
        <td>48</td>
          <td>Manoj</td>
          <td>tiwari</td>
          <td>35</td>
        </tr>
        <tr>
        <td>49</td>
          <td>Manish</td>
          <td>pandey</td>
          <td>23</td>
        </tr>
        <tr>
        <td>50</td>
          <td>Gautam</td>
          <td>gambhir</td>
          <td>39</td>
        </tr>
      </table>
      )
    }
  }export default page5