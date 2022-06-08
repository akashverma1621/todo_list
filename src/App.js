import { useState } from 'react';
import './App.css';
import Onpending from './Onpending';
import Oncomplete from './Oncomplete';

const App=()=>{
  const [data1,setData1]=useState('');
  const [data2,setData2]=useState('');
  const [checked1,setChecked1]=useState(false);
  const [checked2,setChecked2]=useState(false);
  const [name,setName]=useState([]);
  const [status,setStatus]=useState([]);
  //const [status2,setStatus2]=useState([]);
  
  const changeData=(event)=>{
    setData1(event.target.value);
  };
  const handleSubmit=(event)=>{
    if(setData1('') && setData2('')){}
    else{
    event.preventDefault();
    setName([...name,data1]);
    
    setStatus([...status,data2]);
    setData1('');
    setData2('');}
  };
  const del=(id)=>{
    setStatus([...status.slice(0,id),...status.slice(id+1,status.length)]);
    setName([...name.slice(0,id),...name.slice(id+1,status.length)]);
  };
  const up=(id)=>{
    setData1(name[id]);
    if(status[id]==='complete')
    {
      setChecked1(true);
      setChecked2(false);
    }
    else{
      setChecked2(true);
      setChecked1(false);
    }
    setStatus([...status.slice(0,id),...status.slice(id+1,status.length)]);
    setName([...name.slice(0,id),...name.slice(id+1,status.length)]);
  }
  return(
    <>
    <div className='main'>
      <div className='main2'>
      <h2>ToDo List</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={changeData} value={data1} /><br/>
        <input type='radio' name="radio1" 
            checked={checked1} onChange={()=>{
            setChecked1(true);
            setChecked2(false);
            setData2('complete');     
        }
        }/>Complete
        <input type='radio' name="radio1"  checked={checked2} onChange={()=>{
            setChecked1(false);
            setChecked2(true);  setData2('pending');
        }
       }/>Pending<br/>
        <button>Add Task</button><br/>
      </form>
      <div className='two'><ol>
      {status.map((state,index)=>{
        return(<><div className='box'>
          {state==='complete'&& 
      <Oncomplete 
      text={name[index]}
        key={index}
       id={index}
        view={state}
        onSelect={del}
        onUpdate={up}
      />
      }
      {state==='pending' && 
      <Onpending
      text={name[index]}
      key={index}
      id={index}
      view={state}
      onSelect={del}
      onUpdate={up}/>}</div>
    </>) })}
     </ol>
      </div>
      </div>
    </div>
    </>
  )
}

export default App;
