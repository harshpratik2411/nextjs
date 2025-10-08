
export default  function  AuthLayout ({ 
     children,
     } : { children: React.ReactNode }) 
      {
    return ( 
        <div>
            <h1 className="text-5xl text-white">Inner layout</h1> 
            {children}
        </div>
    );
}  