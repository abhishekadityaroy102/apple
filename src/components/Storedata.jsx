import { Box, Button, Heading, Img, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "../components/Storedata.module.css"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
const Storedata = () => {
  const [cart,setcart]=useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  console.log("open",onOpen)
const {id}=useParams()
const [Storedata,setstoredata]=useState({})
const [total,settotal]=useState(0)
// if(cart.length>0){
//   let sum=cart.reduce((a,b)=>a+b.price,0)
// setcart(sum)
// }
const handleremove=(id)=>{
  setcart(cart.filter((el)=>el.id!=id))
}
useEffect(()=>{
  fetch(`http://localhost:8080/store/${id}`).then((r)=>r.json()).then((d)=>setstoredata(d))
},[id]);
const handleclick=()=>{
setcart([...cart,Storedata])
 onOpen()
}
  return (
    <div className={styles.more}>
      <div className={styles.header}>
        <img src={Storedata.image2}></img>
      </div>
      <div className={styles.box}>
      <div>
        <img src={Storedata.image}></img>
      </div>
      <div>
      <h3>{Storedata.name}</h3>
      <p>{Storedata.para}</p>
      <h3>{Storedata.price}</h3>
      
      <Button ref={btnRef} colorScheme='teal' onClick={handleclick}>
        Add To cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your cart have {cart.length} items</DrawerHeader>

          <DrawerBody>
           {
            cart.map((el)=>( <Box>
              <Box>
                <Img src={el.image}></Img>
              </Box>
              <Box>
                <span><p>Product Name:</p><Heading>{el.name}</Heading></span>
                
                <Text>Price :{el.price}</Text>
                <Button onClick={()=>handleremove(el.id)}>Remove</Button>
              </Box>
              
            </Box>))
           }
          </DrawerBody>

          <DrawerFooter>
         
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Go to payment page</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      </div>
      </div>
    </div>
  )
}

export default Storedata