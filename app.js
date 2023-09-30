let q = prompt('Введите команду');
let m = [];
let m2 = q.split(', ');
if(q=='stop'){
    console.log(m);
}
while(q!='stop'){
    if(m2[0]=='add'){
        m2.shift();
        m.push(m2[0]);
        m2.splice(0,1);
         console.log(m);
    }else if(m2[0]=='del'){
        m2.shift();
        for(let i=0;i<m.length;i++){
            if(m[i]==m2[0]){
                m.splice(i,1);break
            }else{}
        }
        m2.splice(0,1);
        console.log(m);
    }else{}
    let q = prompt('Введите команду');
    if(q=='stop'){
        console.log(m);break
    }else{}
    m2=q.split(', ');
}