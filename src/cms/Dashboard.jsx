function Dashboard() {

  const stats = [
    {
      title: "Total Products",
      value: 0,
    },
    {
      title: "Quotes Received",
      value: 0,
    },
    {
      title: "Visitors",
      value: 0,
    },
  ];


  return (
    <div className="dashboard-container">

      <h1>Dashboard</h1>


      {/* Stats */}

      <div className="stats">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h3>{item.title}</h3>

            <p>{item.value}</p>

          </div>

        ))}

      </div>



      {/* Quick Actions */}

      <div className="dashboard-section">

        <h2>Quick Actions</h2>


        <div className="quick-actions">

          <button>
            Add Product
          </button>


          <button>
            Manage Quotes
          </button>


          <button>
            Edit Website
          </button>

        </div>


      </div>




      {/* Recent Activity */}

      <div className="dashboard-section">

        <h2>Recent Activity</h2>


        <div className="activity-card">

          <p>No recent activity</p>

        </div>


      </div>


    </div>
  );
}


export default Dashboard;