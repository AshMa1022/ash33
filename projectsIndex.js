const projects =[
    {
        cover:"Image/Knoll/cover.png",
        title:"Knoll Workplace Research Library",
        category:["Branding"],
        class:'prj0',
        page:'Pages/knoll.html'
    },
    {
        cover:"Image/will to the end/layout.jpg",
        title:"The Will to the End",
        category:["Editorial,Web,Book"],
        class:'prj0',
        page:'Pages/end.html'
    },
    {
        cover:"Image/archive/yearbook24/1.jpg",
        title:"RISD 2024 Yearbook",
        category:["Book"],
        class:'Design Guild',
        page:'Pages/yearbook.html'
    },
    {
        cover:"Image/Birthdaycake/cake.gif",
        title:"Birthdaycake",
        category:["Code[OpenGL],Blender,Drawing"],
        class:'prj1',
        page:'Pages/cake.html'
    },
    {
        cover:"Image/Collection/collection.jpg",
        title:"Collection of Knots",
        category:["Poster","Sign"],
        class:'prj2',
        page:'Pages/collection.html'
    },
    {
        cover:"Image/Cyborg Manifesto/cyborg.gif",
        title:"Cyborg Manifesto",
        category:["Editorial","Book"],
        class:'prj3',
        page:'Pages/cyborg.html'
    },
    {
        cover:"Image/indy/page2-min.png",
        title:"The Indy",
        category:["Editorial","Identity"],
        class:'prj4',
        page:'Pages/indy.html'
    },
    {
        cover:"Image/Random Thoughts/cover.JPG",
        title:"Random Thoughts",
        category:["Book","Drawings"],
        class:'prj6',
        page:'Pages/random.html'
    }

]

const archive=[
    {title:"Into the Woods",
        category:"Promotion",
        img:["../Image/archive/artistball/artist-ball-animation_update.gif","../Image/archive/artistball/4.png",
            ,"../Image/archive/artistball/5.png"],
        year:"2024",
        class:"Design Guild",
        description:"2024 RISD Artist Ball Poster, collaborate with Andrew Liu and Maggie Xian."
    },
    {title:"Heads in the cloud",
     category:"Promotion",
     img:["../Image/archive/clouds-05.jpg","../Image/archive/clouds-1.jpg","../Image/archive/clouds-02.jpg","../Image/archive/clouds-04.jpg","../Image/archive/clouds-03.jpg"],
     year:"2023",
     class:"Design Guild",
     description:"Heads in the cloud proposes visual design for RISD Artist Ball 2023. With Riso printed poster, hand rings, and tickets."
    },
    {title:"Which Window will Your Arms Reach",
     category:"Promotion",
     img:["../Image/archive/window.gif","../Image/archive/window-06.jpg","../Image/archive/window-08.jpg",
     "../Image/archive/window-09.jpg","../Image/archive/window-10.jpg","../Image/archive/window2.gif","../Image/archive/window-07.jpg",
     "../Image/archive/window3.gif","../Image/archive/window-11.jpg"],
     year:"2023",
     class:"Design Studio 3",
     description:`Which Window will Your Arms Reach took inpiration from a poem 床边小舞曲 written by 可仔(Ke Zai).
     This project is intended to bring female domestic workers voices to the public, raising awareness and recognition of their labor.
     The original and translated poem can be found in this <a href="https://www.are.na/block/24691378">link</a>.`
    },
    {title:"In the land of everything",
     category:"Editorial,Riso",
     img:["../Image/archive/risobool.gif","../Image/archive/risobool.jpg","../Image/archive/risobool2.jpg","../Image/archive/risobool3.jpg",
     "../Image/archive/risobool4.jpg","../Image/archive/risobool5.jpg","../Image/archive/risobool6.jpg","../Image/archive/risobool7.jpg"],
     year:"2023",
     class:"RISD Riso Workshop",
     description:"2-4 color riso printed zine, featuring films taken in China. Recoding this land of everything."
    },
    {
        title:"One Way Space",
        category:["Identity","Book"],
        img:["../Image/oneway/page.jpg","../Image/oneway/identity.png","../Image/oneway/page2.png","../Image/oneway/insert2.png",
            "../Image/oneway/page3.jpg","../Image/oneway/page4.png","../Image/oneway/page5.png"],
        year:"2023",
        class:"One Way Space",
        description:"Book cover & Event Identity design for Owspace. Art Director: Li Zhaolu",
    },
    {title:"Ways of Communication",
    category:"Editorial",
    img:["../Image/archive/communicate.gif","../Image/archive/communicate.PNG","../Image/archive/communicate2.PNG","../Image/archive/c1.jpg",
    "../Image/archive/16.jpg","../Image/archive/12.jpg","../Image/archive/communicate3.PNG"],
    year:"2023",
    class:"Type III",
    description:"Thematic Book on Writing System printed on newsprint,section sewn."
   },
   {title:"Fortune Bag",
   category:"Promotion",
   img:["../Image/archive/bag-12.jpg","../Image/archive/bag-13.jpg","../Image/archive/bag-14.jpg","../Image/archive/bag-15.jpg",
   "../Image/archive/bag-16.jpg","../Image/archive/bag-17.jpg"],
   year:"2023",
   class:"Design Studio 2",
   description:`The fortune kit is a souvenir I design for my classmate. The design idea comes from my memory of learning embroidery with my mom during the Chinese New Year.
    I wish to share this memory with an actual experience. As my mom had told me, <i>fortune is always in your hand</i>.`
  },
   {title:"What do you want to say?",
   category:"Editorial",
   img:["../Image/archive/w1.jpg","../Image/archive/w2.jpg","../Image/archive/w3.jpg","../Image/archive/w4.jpg","../Image/archive/w5.jpg","../Image/archive/w6.JPG"],
   year:"2022",
   class:"Embodying Feminism",
   description:`This project does not intend to say theory and experience are incompatible and which is better than the others. Instead, it is my intention to document my attempts at these lack narration.
   Each envelope consists of <br>
   <b>1.</b> <i>a dialogue with people who are really closed in my life(my mother, my friend, and my partner)</i>
   <br><b>2.</b> <i>the context of the conversation</i>
   <br><b>3.</b> <i>a reflection letter to the person I had a conversation with.</i>`
    },
    {title:"Color Quilt",
     category:"Textile",
     img:["../Image/archive/quilt.jpg","../Image/archive/quilt2.jpg","../Image/archive/quilt3.jpg"],
     year:"2022",
     class:"Color & Surface",
     description:`Color Quilt is a modular textile piece inspired by quilts made by the hands of mothers.
      Made in found fabric scraps, it is intended to explore color and surface in a versatile form, with 
      care and collaboration. Project collaborated with Radhika Chauhan.`
    },
    {title:"Poster Collection",
        category:"Promotion",
        img:["../Image/archive/pos/1.png","../Image/archive/pos/2.png","../Image/archive/pos/3.png",
           "../Image/archive/pos/6.jpg"],
        year:"General",
        class:"",
        description:""
       }
    // },
    // {title:"Sketchbook",
    //  category:"Drawings",
    //  img:[""],
    //  year:"General",
    //  description:""
    // }

]

function goTo(page){
    window.location.href = page;
}