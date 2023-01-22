import del from './img/delete.png'
import s from './list.module.css'
const List = ({ removeTask, toggleContent,obj }) => {
  return (
    <div  style={{display:'flex', justifyContent:'center'}}>
      {obj.text ? (
        <div key={obj.id}  style={{width:'400px', height:'40px', padding:'10px', margin:'10px', display:'flex',alignItems:'center', backgroundColor:'rgb(231, 230, 230)', borderRadius:'15px' }}>
          <span onClick={()=>toggleContent(obj.id)} className={obj.completed? s.complete : s.noComplete} style={{width:'360px', marginLeft:'20px'}}>{obj.text}</span>
          <span onClick={()=>removeTask(obj.id)} style={{width:'20px', height:'20px'}}> <img style={{width:'20px', height:'20px'}} src={del} alt="" /> </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default List
