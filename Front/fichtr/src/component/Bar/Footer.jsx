import Button from "../Button"
export default function Footer(){
    return(
        <div className="my-app-footer flex justify-between items-center px-8 py-6 fixed top-0 left-0 right-0 bg-black shadow-md h-[12rem] z-10" style={{ backgroundColor: '#310046' }}>
           <div className="absolute left-0 flex items-center ml-32">
              <Button
                 title={"Conditions générales et cookies"}
                 type={"button"}
                 theme={"primary"}                                   // les liens des buttons vers chaque page 
                 className="w-10 h-10 rounded-full"
               />
            </div>
           <div className="absolute right-0 flex items-center mr-32">
              <Button
                 title={"Contact"}
                 type={"button"}
                 theme={"primary"}
                 className="w-10 h-10 rounded-full"
               />
            </div>
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center">
              <Button
                 title={"Mentions légales"}
                 type={"button"}
                 theme={"primary"}
                  className="w-10 h-10 rounded-full"
               />
           </div>
       </div>
    )
}