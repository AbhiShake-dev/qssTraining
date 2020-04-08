import React,{Component} from 'react';
import './index.css';
class page3 extends React.Component {
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
        <td>21</td>
          <td>Rohit</td>
          <td>sharma</td>
          <td>45</td>
        </tr>
        <tr>
        <td>22</td>
          <td>Mahendra singh</td>
          <td>dhoni</td>
          <td>37</td>
        </tr>
        <tr>
        <td>23</td>
          <td>Virendra</td>
          <td>sehwag</td>
          <td>45</td>
        </tr>
      
        <tr>
        <td>24</td>
          <td>Ishan</td>
          <td>kishan</td>
          <td>24</td>
        </tr>
        <tr>
        <td>25</td>
          <td>pat</td>
          <td>cummins</td>
          <td>33</td>
        </tr>
        <tr>
        <td>26</td>
          <td>Susya k</td>
          <td>yadav</td>
          <td>31</td>
        </tr>
      
        <tr>
        <td>27</td>
          <td>keron</td>
          <td>pollard</td>
          <td>36</td>
        </tr>
        <tr>
        <td>28</td>
          <td>Jasprit</td>
          <td>boomrah</td>
          <td>28</td>
        </tr>
        <tr>
        <td>29</td>
          <td>Umesh</td>
          <td>yadav</td>
          <td>30</td>
        </tr>
        <tr>
        <td>30</td>
          <td>Ishant</td>
          <td>sharma</td>
          <td>32</td>
        </tr>
      </table>
      )
    }
  }export default page3