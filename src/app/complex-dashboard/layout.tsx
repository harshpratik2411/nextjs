// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function DashboardLayout({
    children, 
    users,
    revenue,
    notifications, 
    login, 
}: { 
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) { 

    const isLoggedIn = false; // Simulated authentication state
    return isLoggedIn ? ( 
    
        <div>
            {children}
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
                    <h2>User Analytics</h2>
                    {users}
                </div>
                <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
                    <h2>Revenue Metrics</h2>
                    {revenue}
                </div>
                <div style={{ flex: 1 , border: '1px solid #ccc', padding: '10px', }}>
                    <h2>Notifications</h2>
                    {notifications}
              </div>
        </div> 
        </div>  
    ) : (
        <div>
            {login}
        </div>
        
    );
}
