window.addEventListener('DOMContentLoaded', (event) => {
     const myVideo = document.querySelector('video');
     const myBtn = document.querySelector('button');
     const pip = document.querySelector('.pip');

     if("pictureInPictureEnabled" in document ){
          myBtn.style.display='block';
          pip.style.display='none';
          myBtn.addEventListener('click', (e)=>{
               e.preventDefault();
               if(document.pictureInPictureElement){
                    document.exitPictureInPicture().catch(err => {
                         console.log(err);
                        

                    });
                    return;

               }
             
               myVideo.requestPictureInPicture().catch( err =>{
                    console.log(err);
                   
                    
               })
          });

          myVideo.addEventListener("enterpictureinpicture", e=>{
               myBtn.textContent = 'Leave Picture In Picture';
          });
          myVideo.addEventListener("leavepictureinpicture", e => {
               myBtn.textContent = 'Enter Picture In Picture';
          })
     }


});