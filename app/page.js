import Image from 'next/image'
import Link from 'next/link'
import {Text, Button, Popover, PopoverRoot, PopoverTrigger, PopoverContent, Box, TextFieldInput} from '@radix-ui/themes'
import { BsDoorOpen } from 'react-icons/bs'

export default function Home() {
  return (
    <div className=' text-zinc-600 flex flex-col items-center justify-center space-y-3' >
      <Text as={'p'} size={'9'}> Conta Facil</Text>
      <Text as={'p'} size={'8'}> Seja bem vind@, o que deseja fazer?</Text>
      <PopoverRoot>
        <PopoverTrigger>
          <Button size={'4'} variant="outline" color='jade'>
            
              Abrir estabelecimento
           
          </Button>
        </PopoverTrigger>
        <PopoverContent className="  -ml-52 flex items-center justify-center">
          <Box grow={'1'} className='' >
            <div className=" text-zinc-800 flex items-center space-x-4">
              <Text size={'6'} as='p'>
                Com quantas mesas iremos abrir hoje?
              </Text>
              <div className=' flex items-center space-x-2'>
              <TextFieldInput />
              <Button className=' flex flex-row justify-center' color='jade'>
                <Link href={'/pages/Home'}>
                  Abrir
                </Link>
              </Button>
              </div>
            </div>
            <Text className='italic text-zinc-500' size={'4'}>Não se preocupe poderá alterar a quantidade de mesas durante o funcionamento</Text>
          </Box>
        </PopoverContent>
      </PopoverRoot>
    </div>
  )
}
