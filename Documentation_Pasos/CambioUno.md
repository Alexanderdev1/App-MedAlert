# Organziacion de los archivos

    Por el moemnto la organizacion que tenemos es la siguien en poximas edicioens se mejorara la estructuracionde las carpetas

    ![Imagen de la estructura de carpetas] (archivos1.png)

---

# Tabs

    En nuestra aplicacion es importante tener la navegaciones uitilziamos los Tabs para colcoarlos

    explicare como se agrega los tabs para esta aplicación

    ```tsx
        <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      /*
        - El name nos servira para dirigirnos a la pantalla en este caso al inicio 
        - Existen las opciones donde el title es para cambiar el nomrbe de nuestra tab
        - Para la experiencia de la persona es importante los iconos de tal forma que utilziamnos "EXPO VECTOR ICONS"
      */
    ```
---

# StatusBar and SafeAreaView  
    
Teniamos un error grande y esque nuestra aplicaicon ocultaba toda la pantalla es decir tapaba la hora la bateria la solucion que se le dio es utilziar el safeAreaView con esto nos garantiza que en cualquier dispositivo tenga el area de bateria la palicaicon no ocupe ese espcio

    ```tsx
        
        type Prop={
            children:React.ReactNode;
        }

        return (
            <SafeAreaView className='flex-1' edges={['top']}>
                <StatusBar barStyle={'dark-content'} className='bg-white' />
                {children}
            </SafeAreaView>
        )
    
    //Lo dejamos como componte ya que lo vamos a utilizar en todas las paginas que necesitamos
    ```



    