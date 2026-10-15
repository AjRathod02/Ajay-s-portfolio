// All content taken from Ajay's resumes. Links set to '#' are placeholders.
window.SKILLS = [
  {k:"Machine Learning", items:["Scikit-learn","XGBoost","LightGBM","Random Forest","Linear/Logistic Regression","SVM","KNN","K-Means","PCA","Feature Engineering","GridSearchCV","Cross-Validation"]},
  {k:"Python & SQL", items:["Python","Pandas","NumPy","Advanced SQL (CTEs, window functions)","PostgreSQL","Matplotlib","Seaborn"]},
  {k:"Statistics", items:["Hypothesis Testing","A/B Testing","Confidence Intervals","ARIMA","Holt-Winters","SciPy","statsmodels"]},
  {k:"BI & Viz", items:["Power BI (DAX)","Tableau","Advanced Excel","Power Query","Streamlit","Plotly"]},
  {k:"GenAI & DL", items:["LLMs","RAG","LangChain","PyTorch","TensorFlow/Keras","NLP (TF-IDF, Naive Bayes)","Recommender Systems"]},
  {k:"Big Data & Cloud", items:["AWS","Apache Spark / PySpark","Databricks","Snowflake","Airflow","APScheduler ETL"]},
  {k:"Full Stack", items:["Next.js 14","React.js","TypeScript","Node.js","FastAPI","Flask","Supabase","MongoDB","Firebase","Tailwind CSS","React Native"]},
  {k:"Tooling", items:["Git/GitHub","Docker","CI/CD (GitHub Actions)","Postman","Power Automate","PyTest","Jest"]}
];
window.PROJECTS = [
  {t:"Bike Rental Demand Prediction", tag:"data", ctx:"Airvariant · Data Science Internship · Apr–Jul 2026",
   d:"End-to-end hourly demand model: EDA of demand vs. weather, season, hour and working day; cyclical time and weather features; 6 regressors from linear baselines to Random Forest and Gradient Boosting tuned with GridSearchCV + cross-validation. Best model lifted R² from 0.39 to 0.64 and cut RMSE by ~23% (MAE ~89 rentals/hour). Served via a Flask REST API and a Streamlit app; findings presented in a 30-slide deck.",
   s:["Python","Pandas","NumPy","Scikit-learn","Matplotlib","Seaborn","Flask","Streamlit"], link:"#"},
  {t:"Pricing-Analytics Dashboard", tag:"data", ctx:"Reunios · production",
   d:"Merges reservation and booking exports to benchmark payout per night (median, P25/P75) by resort, unit type, quarter and check-in month. Analyses upcoming vs. completed bookings, channel mix, lead time, length of stay and seasonality to produce rate recommendations for unrented inventory used by the pricing team.",
   s:["Pandas","Streamlit","Plotly"], link:null},
  {t:"Cancellation-Planning ETL Pipeline", tag:"data", ctx:"Reunios · production",
   d:"Daily Python pipeline that ingests SharePoint Excel workbooks, transforms inventory and booking data and publishes cancellation plans to Microsoft Teams via Power Automate — replacing hours of manual planning work each week.",
   s:["Pandas","FastAPI","APScheduler","Microsoft Graph","Power Automate"], link:null},
  {t:"ML, NLP & Statistics Portfolio", tag:"data", ctx:"ExcelR Data Science Program",
   d:"XGBoost vs. LightGBM classification (ROC-AUC); Logistic Regression, SVM, KNN and Decision Tree pipelines with GridSearchCV; a TensorFlow/Keras ANN for 26-class letter recognition; K-Means, DBSCAN and hierarchical clustering with PCA; Apriori rules; TF-IDF + Naive Bayes text classification; a cosine-similarity recommender; ARIMA vs. Holt-Winters forecasting; chi-square tests with confidence intervals.",
   s:["Scikit-learn","XGBoost","LightGBM","TensorFlow","SciPy","statsmodels"], link:"#"},
  {t:"Food Delivery Time Prediction", tag:"data", ctx:"Personal ML project",
   d:"Delivery-time regression with preprocessing, EDA, feature engineering and categorical encoding; compared tuned regressors with hyperparameter tuning and cross-validation, evaluated with MAE and R².",
   s:["Python","Pandas","NumPy","Scikit-learn"], link:"#"},
  {t:"CasaFlow — Property Management Platform", tag:"web", ctx:"Reunios · internal platform",
   d:"Internal PMS for vacation-rental operations: inventory, booking sync, dynamic pricing, guest allocation, messaging and finance reconciliation. 129+ API routes, 49 PostgreSQL migrations, 40+ dashboard pages, a 7-role RBAC v2 with deny-wins overrides enforced by PostgreSQL RLS, and Beds24/Hospitable sync with duplicate & overlap detection.",
   s:["Next.js 14","TypeScript","Supabase","PostgreSQL","MongoDB","TanStack Query","Tailwind CSS"], link:null},
  {t:"Ambajogai Grocery Store", tag:"web", ctx:"Full-stack e-commerce web app",
   d:"Grocery platform with product browsing, cart/checkout (UPI & COD), order tracking, role-based admin/vendor/delivery dashboards, JWT authentication, REST APIs, Cloudinary image upload and real-time order workflows.",
   s:["React.js","FastAPI","MongoDB","Tailwind CSS"], link:"#"},
  {t:"Onalani — Vacation Rental Booking", tag:"web", ctx:"Booking platform",
   d:"Booking, change-request and messaging features, admin credits APIs, complaint workflows and booking-lifecycle messaging with durable event metadata.",
   s:["Next.js","Supabase","Stripe"], link:"#"},
  {t:"Brightlink Company Website", tag:"web", ctx:"Brightlink · part-time",
   d:"Responsive, mobile-first production website with reusable UI sections, built and deployed for Brightlink.",
   s:["React.js","Tailwind CSS","Firebase Hosting"], link:"#"}
];
window.EXPERIENCE = [
  {r:"Software Developer (Full-time)", c:"Reunios Pvt. Ltd.", p:"Jun 2024 — Present", b:[
    "Built Python ETL pipelines (Pandas, FastAPI, APScheduler, Microsoft Graph) that ingest SharePoint workbooks daily and publish cancellation plans to Teams.",
    "Developed a pricing-analytics app (Streamlit, Plotly): payout-per-night benchmarks, seasonality, lead time and length-of-stay across multiple resorts.",
    "Implemented smart-pricing and validation logic from historical demand, occupancy tiers, booking windows and cost basis.",
    "Designed the PostgreSQL data model (49 migrations, RLS for 7 roles) and 129+ APIs behind CasaFlow’s 40+ dashboard pages.",
    "Synced Beds24/Hospitable booking data via REST APIs with duplicate and overlap detection and reconciliation."]},
  {r:"Full Stack Developer (Part-time)", c:"Brightlink", p:"Nov 2025 — Present", b:["Built and deployed the company website with React.js and Firebase."]},
  {r:"Data Science Intern (Part-time, remote)", c:"Airvariant", p:"Apr 2026 — Jul 2026", b:["Bike Rental Demand Prediction: EDA, feature engineering, 6 tuned regressors; R² 0.39 → 0.64, deployed with Flask & Streamlit."]},
  {r:"Front-End Developer Intern", c:"Kshikshatech", p:"Nov 2023 — May 2024", b:["Built responsive React.js UI components and pages for artify.in as part of the team."]},
  {r:"B.Tech, Computer Science & Engineering", c:"Marathwada Institute of Technology", p:"2020 — 2024", b:["First Rank Holder, college Technical Aptitude Competition · NSS Volunteer."]}
];
