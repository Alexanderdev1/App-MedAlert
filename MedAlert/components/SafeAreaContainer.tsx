import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props ={
    children: React.ReactNode;
}
export default function SafeAreaContainer({children}: Props) {
  return (
    <SafeAreaView className='flex-1' edges={['top']}>
        <StatusBar barStyle={'dark-content'} className='bg-white' />
        {children}
    </SafeAreaView>
  )
}


