// Client-side mock for POST /api/v1/conversation/message
// Injected only in the static build hosted on salilvnair.github.io.
// The original convengine-chat-demo source is NOT modified.
(function () {
  var DATA = {
    "pairs": [
      { "user": "hi",                    "agent": "Hi there! 👋 How can I help you today?" },
      { "user": "hello",                 "agent": "Hello! Welcome to ConvEngine. What can I do for you?" },
      { "user": "hey",                   "agent": "Hey! What's up? I'm here to help." },
      { "user": "good morning",          "agent": "Good morning! ☀️ Ready to help you tackle the day. What do you need?" },
      { "user": "good afternoon",        "agent": "Good afternoon! Hope your day is going well. What can I do for you?" },
      { "user": "good evening",          "agent": "Good evening! 🌙 How can I assist you tonight?" },
      { "user": "howdy",                 "agent": "Howdy! 🤠 What can I help you with today?" },
      { "user": "greetings",             "agent": "Greetings! I'm here and ready to assist. What's on your mind?" },
      { "user": "sup",                   "agent": "Hey! What can I help you with?" },
      { "user": "yo",                    "agent": "Yo! 👋 What do you need?" },
      { "user": "hi there",              "agent": "Hi there! Great to see you. How can I help?" },
      { "user": "hey there",             "agent": "Hey there! What can I do for you today?" },
      { "user": "hiya",                  "agent": "Hiya! 😊 How can I assist you?" },
      { "user": "morning",               "agent": "Morning! ☀️ How can I help you start your day?" },
      { "user": "evening",               "agent": "Good evening! What can I help you with tonight?" },
      { "user": "how are you",           "agent": "Doing great, thanks for asking! I'm ready to help. 😊 What do you need?" },
      { "user": "how are you doing",     "agent": "Doing well! Thanks for checking in. How can I assist you today?" },
      { "user": "how's it going",        "agent": "Going well! Just waiting to help. What do you need?" },
      { "user": "how do you do",         "agent": "I do pretty well for an AI assistant! How about you? 😄" },
      { "user": "what's up",             "agent": "Not much — just here to help! What do you need?" },
      { "user": "what's new",            "agent": "Nothing much on my end. What can I help you with today?" },
      { "user": "are you ok",            "agent": "I'm functioning perfectly! Thanks for checking. What do you need?" },
      { "user": "you good",              "agent": "All good here! How can I help? 👍" },
      { "user": "help",                  "agent": "Sure! I can help with products, orders, analytics, flights, and more. What are you looking for?" },
      { "user": "i need help",           "agent": "Of course! Tell me what you need help with and I'll do my best to assist." },
      { "user": "can you help me",       "agent": "Absolutely! What would you like help with today?" },
      { "user": "assist me",             "agent": "I'd be happy to assist! What do you need?" },
      { "user": "what can you do",       "agent": "I can answer questions about orders, products, analytics, flights, and more. I support rich interactive cards too — try asking me to 'show flights' or 'recommend products'! 🚀" },
      { "user": "what are your capabilities", "agent": "I can handle questions about orders, analytics, products, flights, and more. I also support interactive renderers — try 'show me a flight card' or 'recommend me some products'!" },
      { "user": "how can you help",      "agent": "I can help with product recommendations, order tracking, data tables, flight booking, and answering general questions. What would you like?" },
      { "user": "what do you know",      "agent": "I know about orders, analytics, products, flights, sales data, and ConvEngine features. What would you like to know?" },
      { "user": "show features",         "agent": "Here are some things I can do:\n✈️ Search & compare flights\n🛒 Recommend products\n📦 Track orders\n📊 Show data tables\n💬 Answer questions about analytics & accounts" },
      { "user": "what can i ask",        "agent": "You can ask me about flights, orders, products, sales, analytics, your account, or anything else. I'll do my best to help!" },
      { "user": "recommend products",    "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p2", "name": "MagSafe Charger 15W", "price": "$39", "rating": 4.6, "reviews": 8230, "badge": "Top Rated", "emoji": "🔋" }, { "id": "p3", "name": "iPhone 15 Pro Case", "price": "$49", "rating": 4.7, "reviews": 5670, "badge": "New Arrival", "emoji": "📱" } ] } },
      { "user": "show me products",      "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p2", "name": "MacBook Pro 14\"", "price": "$1,999", "rating": 4.9, "reviews": 6120, "badge": "Staff Pick", "emoji": "💻" }, { "id": "p3", "name": "Apple Watch Ultra", "price": "$799", "rating": 4.8, "reviews": 3480, "badge": "New Arrival", "emoji": "⌚" } ] } },
      { "user": "what products do you have", "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p2", "name": "MagSafe Charger 15W", "price": "$39", "rating": 4.6, "reviews": 8230, "badge": "Top Rated", "emoji": "🔋" }, { "id": "p3", "name": "iPhone 15 Pro Case", "price": "$49", "rating": 4.7, "reviews": 5670, "badge": "New Arrival", "emoji": "📱" } ] } },
      { "user": "recommend something",   "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "iPad Pro M4", "price": "$1,099", "rating": 4.7, "reviews": 4320, "badge": "Hot", "emoji": "📱" }, { "id": "p2", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p3", "name": "Apple TV 4K", "price": "$129", "rating": 4.5, "reviews": 8920, "badge": "Popular", "emoji": "📺" } ] } },
      { "user": "show products",         "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p2", "name": "MagSafe Charger 15W", "price": "$39", "rating": 4.6, "reviews": 8230, "badge": "Top Rated", "emoji": "🔋" }, { "id": "p3", "name": "iPhone 15 Pro Case", "price": "$49", "rating": 4.7, "reviews": 5670, "badge": "New Arrival", "emoji": "📱" } ] } },
      { "user": "buy something",         "agent": { "type": "ProductRecommendation", "products": [ { "id": "p1", "name": "AirPods Pro 2nd Gen", "price": "$249", "rating": 4.8, "reviews": 12450, "badge": "Best Seller", "emoji": "🎧" }, { "id": "p2", "name": "MagSafe Charger 15W", "price": "$39", "rating": 4.6, "reviews": 8230, "badge": "Top Rated", "emoji": "🔋" }, { "id": "p3", "name": "iPhone 15 Pro Case", "price": "$49", "rating": 4.7, "reviews": 5670, "badge": "New Arrival", "emoji": "📱" } ] } },
      { "user": "show flights",          "agent": { "type": "FlightCard", "from": "SFO", "to": "JFK", "date": "May 5, 2026", "flights": [ { "id": "f1", "carrier": "Delta Air Lines",    "departure": "08:00", "arrival": "16:30", "duration": "5h 30m", "stops": "Nonstop",  "price": "$349" }, { "id": "f2", "carrier": "United Airlines",   "departure": "11:15", "arrival": "20:00", "duration": "5h 45m", "stops": "1 Stop",  "price": "$289" }, { "id": "f3", "carrier": "American Airlines", "departure": "14:30", "arrival": "22:50", "duration": "5h 20m", "stops": "Nonstop",  "price": "$419" } ] } },
      { "user": "book a flight",         "agent": { "type": "FlightCard", "from": "SFO", "to": "JFK", "date": "May 5, 2026", "flights": [ { "id": "f1", "carrier": "Delta Air Lines",    "departure": "08:00", "arrival": "16:30", "duration": "5h 30m", "stops": "Nonstop",  "price": "$349" }, { "id": "f2", "carrier": "United Airlines",   "departure": "11:15", "arrival": "20:00", "duration": "5h 45m", "stops": "1 Stop",  "price": "$289" }, { "id": "f3", "carrier": "American Airlines", "departure": "14:30", "arrival": "22:50", "duration": "5h 20m", "stops": "Nonstop",  "price": "$419" } ] } },
      { "user": "find flights",          "agent": { "type": "FlightCard", "from": "LAX", "to": "LHR", "date": "May 10, 2026", "flights": [ { "id": "f1", "carrier": "British Airways",  "departure": "21:00", "arrival": "15:30", "duration": "10h 30m", "stops": "Nonstop", "price": "$849" }, { "id": "f2", "carrier": "Virgin Atlantic",   "departure": "18:45", "arrival": "13:15", "duration": "10h 30m", "stops": "Nonstop", "price": "$799" } ] } },
      { "user": "find me a flight",      "agent": { "type": "FlightCard", "from": "NYC", "to": "LAX", "date": "May 8, 2026",  "flights": [ { "id": "f1", "carrier": "JetBlue",           "departure": "07:30", "arrival": "11:00", "duration": "5h 30m", "stops": "Nonstop",  "price": "$199" }, { "id": "f2", "carrier": "Southwest Airlines", "departure": "10:00", "arrival": "13:45", "duration": "5h 45m", "stops": "Nonstop",  "price": "$179" } ] } },
      { "user": "flight search",         "agent": { "type": "FlightCard", "from": "SFO", "to": "JFK", "date": "May 5, 2026", "flights": [ { "id": "f1", "carrier": "Delta Air Lines",    "departure": "08:00", "arrival": "16:30", "duration": "5h 30m", "stops": "Nonstop",  "price": "$349" }, { "id": "f2", "carrier": "United Airlines",   "departure": "11:15", "arrival": "20:00", "duration": "5h 45m", "stops": "1 Stop",  "price": "$289" }, { "id": "f3", "carrier": "American Airlines", "departure": "14:30", "arrival": "22:50", "duration": "5h 20m", "stops": "Nonstop",  "price": "$419" } ] } },
      { "user": "flights",               "agent": { "type": "FlightCard", "from": "SFO", "to": "JFK", "date": "May 5, 2026", "flights": [ { "id": "f1", "carrier": "Delta Air Lines",    "departure": "08:00", "arrival": "16:30", "duration": "5h 30m", "stops": "Nonstop",  "price": "$349" }, { "id": "f2", "carrier": "United Airlines",   "departure": "11:15", "arrival": "20:00", "duration": "5h 45m", "stops": "1 Stop",  "price": "$289" } ] } },
      { "user": "track my order",        "agent": { "type": "OrderTracker", "orderId": "ORD-78291", "product": "AirPods Pro 2nd Gen", "estimatedDelivery": "Tomorrow, May 1", "steps": [ { "label": "Order Placed", "done": true, "date": "Apr 28 · 9:12 AM" }, { "label": "Processing", "done": true, "date": "Apr 28 · 2:45 PM" }, { "label": "Shipped", "done": true, "date": "Apr 29 · 8:30 AM" }, { "label": "Out for Delivery", "done": false, "current": true, "date": "Est. May 1 · AM" }, { "label": "Delivered", "done": false, "date": "Est. May 1" } ] } },
      { "user": "where is my order",     "agent": { "type": "OrderTracker", "orderId": "ORD-78291", "product": "AirPods Pro 2nd Gen", "estimatedDelivery": "Tomorrow, May 1", "steps": [ { "label": "Order Placed", "done": true, "date": "Apr 28 · 9:12 AM" }, { "label": "Processing", "done": true, "date": "Apr 28 · 2:45 PM" }, { "label": "Shipped", "done": true, "date": "Apr 29 · 8:30 AM" }, { "label": "Out for Delivery", "done": false, "current": true, "date": "Est. May 1 · AM" }, { "label": "Delivered", "done": false, "date": "Est. May 1" } ] } },
      { "user": "order status",          "agent": { "type": "OrderTracker", "orderId": "ORD-91033", "product": "MacBook Pro 14\" M3", "estimatedDelivery": "May 3, 2026", "steps": [ { "label": "Order Placed", "done": true, "date": "Apr 29 · 11:00 AM" }, { "label": "Payment Verified", "done": true, "date": "Apr 29 · 11:02 AM" }, { "label": "Preparing to Ship", "done": false, "current": true, "date": "Est. Apr 30" }, { "label": "Shipped", "done": false, "date": "Est. May 1" }, { "label": "Delivered", "done": false, "date": "Est. May 3" } ] } },
      { "user": "check my order",        "agent": { "type": "OrderTracker", "orderId": "ORD-78291", "product": "AirPods Pro 2nd Gen", "estimatedDelivery": "Tomorrow, May 1", "steps": [ { "label": "Order Placed", "done": true, "date": "Apr 28 · 9:12 AM" }, { "label": "Processing", "done": true, "date": "Apr 28 · 2:45 PM" }, { "label": "Shipped", "done": true, "date": "Apr 29 · 8:30 AM" }, { "label": "Out for Delivery", "done": false, "current": true, "date": "Est. May 1 · AM" }, { "label": "Delivered", "done": false, "date": "Est. May 1" } ] } },
      { "user": "where's my package",    "agent": { "type": "OrderTracker", "orderId": "ORD-88442", "product": "iPhone 15 Pro Max", "estimatedDelivery": "May 2, 2026", "steps": [ { "label": "Order Placed", "done": true, "date": "Apr 28 · 3:00 PM" }, { "label": "Processing", "done": true, "date": "Apr 28 · 5:15 PM" }, { "label": "Shipped", "done": false, "current": true, "date": "Est. Apr 30" }, { "label": "Out for Delivery", "done": false, "date": "Est. May 2" }, { "label": "Delivered", "done": false, "date": "Est. May 2" } ] } },
      { "user": "show me a table",       "agent": { "type": "DataTable", "title": "Q1 Sales Summary", "caption": "Source: internal CRM · Updated Apr 30 2026", "headers": ["Product", "Region", "Units Sold", "Revenue", "Growth"], "rows": [ ["AirPods Pro", "North America", "42,150", "$10.5M", "+18%"], ["MacBook Pro 14\"", "North America", "18,200", "$36.4M", "+12%"], ["iPhone 15 Pro", "Europe", "61,400", "$73.7M", "+9%"], ["Apple Watch Ultra", "Asia Pacific", "12,800", "$16.6M", "+31%"], ["iPad Pro", "North America", "23,900", "$21.5M", "+5%"] ] } },
      { "user": "show data",             "agent": { "type": "DataTable", "title": "Active Users by Plan", "caption": "Snapshot: Apr 30 2026 · 09:00 UTC", "headers": ["Plan", "Users", "MoM Change", "Avg Revenue", "Churn Rate"], "rows": [ ["Free", "820,000", "+8%", "$0", "3.2%"], ["Starter", "290,000", "+15%", "$9/mo", "2.1%"], ["Pro", "75,000", "+22%", "$29/mo", "1.4%"], ["Business", "18,500", "+31%", "$99/mo", "0.8%"], ["Enterprise", "2,100", "+18%", "$499/mo", "0.3%"] ] } },
      { "user": "sales report",          "agent": { "type": "DataTable", "title": "Q1 Sales Summary", "caption": "Source: internal CRM · Updated Apr 30 2026", "headers": ["Product", "Region", "Units Sold", "Revenue", "Growth"], "rows": [ ["AirPods Pro", "North America", "42,150", "$10.5M", "+18%"], ["MacBook Pro 14\"", "North America", "18,200", "$36.4M", "+12%"], ["iPhone 15 Pro", "Europe", "61,400", "$73.7M", "+9%"], ["Apple Watch Ultra", "Asia Pacific", "12,800", "$16.6M", "+31%"], ["iPad Pro", "North America", "23,900", "$21.5M", "+5%"] ] } },
      { "user": "show sales data",       "agent": { "type": "DataTable", "title": "Top Sales Reps — April 2026", "caption": "Period: Apr 1–30 · Target: $500k per rep", "headers": ["Rep", "Region", "Deals Closed", "Revenue", "vs Target"], "rows": [ ["Sarah Kim", "West Coast", "34", "$612k", "+22%"], ["Marcus Lee", "East Coast", "28", "$539k", "+8%"], ["Priya Nair", "EMEA", "41", "$487k", "-3%"], ["Tom Russo", "APAC", "19", "$401k", "-20%"], ["Dana Cross", "LATAM", "22", "$398k", "-21%"] ] } },
      { "user": "show top customers",    "agent": { "type": "DataTable", "title": "Top Customers by Lifetime Value", "caption": "LTV calculated over 24 months · Apr 2026", "headers": ["Customer", "Industry", "LTV", "Orders", "Last Order"], "rows": [ ["Acme Corp", "Retail", "$1.2M", "148", "Apr 28"], ["Globex Inc", "Finance", "$980k", "122", "Apr 30"], ["Initech LLC", "Tech", "$754k", "93", "Apr 25"], ["Umbrella Co", "Healthcare", "$612k", "78", "Apr 29"], ["Soylent Corp", "FMCG", "$489k", "64", "Apr 22"] ] } },
      { "user": "show inventory",        "agent": { "type": "DataTable", "title": "Warehouse Inventory Status", "caption": "Live stock · Warehouse A · Apr 30 2026", "headers": ["SKU", "Product", "In Stock", "Reserved", "Reorder At"], "rows": [ ["SKU-001", "AirPods Pro 2nd Gen", "4,820", "1,200", "2,000"], ["SKU-002", "MagSafe Charger 15W", "12,400", "3,100", "5,000"], ["SKU-003", "iPhone 15 Pro Case", "8,750", "2,300", "3,500"], ["SKU-004", "Apple Watch Band", "6,200", "900", "2,500"], ["SKU-005", "USB-C Hub 8-in-1", "3,100", "700", "1,500"] ] } },
      { "user": "show analytics",        "agent": "Here's a quick analytics snapshot 📊\n• Revenue: **$142M** (+18% vs last quarter)\n• Active users: **1.2M** (+12% MoM)\n• Conversion rate: **3.4%** (up from 2.9%)\n• Orders today: **23,847**" },
      { "user": "how is sales doing",    "agent": "Sales are strong! 💪 Q1 revenue hit $142M, up 18% YoY. Top performer: iPhone 15 Pro in Europe with 61,400 units." },
      { "user": "revenue this quarter",  "agent": "Q1 revenue: **$142M**, up 18% from Q4. North America leads at $47M, followed by Europe at $38M and Asia Pacific at $29M." },
      { "user": "how many users",        "agent": "You currently have **1.2M active users**, up 12% from last month. New signups this week: **8,432**. Churn rate is at a healthy 1.2%." },
      { "user": "top products",          "agent": "Top products this month 🏆\n1. iPhone 15 Pro — 61,400 units\n2. AirPods Pro — 42,150 units\n3. iPad Pro — 23,900 units\n4. MacBook Pro 14\" — 18,200 units\n5. Apple Watch Ultra — 12,800 units" },
      { "user": "show me revenue",       "agent": "Revenue this month: **$142M** 📈 That's up 18% from last quarter. Want me to show a full breakdown by product or region?" },
      { "user": "conversion rate",       "agent": "Current conversion rate: **3.4%**, up from 2.9% last month. Mobile leads at 4.1%, desktop at 2.9%." },
      { "user": "show me the dashboard", "agent": "Dashboard summary 📊\n• Revenue: $142M (+18%)\n• Active Users: 1.2M (+12%)\n• Conversion: 3.4%\n• Orders today: 23,847\n• Top region: North America" },
      { "user": "growth",                "agent": "Overall growth is looking great! 📈 Revenue up 18%, users up 12%, conversion up 0.5pp. Apple Watch Ultra is the fastest growing product at +31%." },
      { "user": "how many orders today", "agent": "You have **23,847 orders** today, up 8% from yesterday. Electronics lead at 42% of total orders. 🛒" },
      { "user": "show me recent orders", "agent": "Recent orders:\n• #1234 — Delivered ✅\n• #1235 — In Transit 📦\n• #1236 — Processing ⏳\n• #1237 — Delivered ✅\n• #1238 — Cancelled ❌" },
      { "user": "pending orders",        "agent": "You have **3,421 pending orders** right now. Would you like me to pull up the details or filter by category?" },
      { "user": "cancelled orders",      "agent": "**142 orders** were cancelled this week — that's 0.6% of total orders, down from 0.8% last week. 📉" },
      { "user": "completed orders",      "agent": "**18,432 orders** completed this week! That's a fulfillment rate of **98.2%**. 🎉" },
      { "user": "order history",         "agent": "Recent order history:\n• #ORD-001 — $1,049 — MacBook Pro\n• #ORD-002 — $249 — AirPods Pro\n• #ORD-003 — $399 — iPad\nNeed the full list?" },
      { "user": "show orders",           "agent": "**23,847 orders** processed today. Top category: Electronics (42%). Second: Accessories (28%). Need to filter by status?" },
      { "user": "refund status",         "agent": "Your refund for order #ORD-891 was processed **2 days ago**. It should appear in your account within **3–5 business days**." },
      { "user": "return a product",      "agent": "To return a product, go to Orders → Select the order → Click 'Return Item'. Returns are accepted within **30 days** of delivery. Need help with a specific order?" },
      { "user": "how to return",         "agent": "Returns are simple: Orders → Select order → Click 'Return Item'. You'll get a prepaid label by email within 24 hours. Items must be in original condition." },
      { "user": "return policy",         "agent": "Return policy: **30 days** from delivery. Items must be unused and in original packaging. Electronics: 15 days. Software/digital: no returns." },
      { "user": "my account",            "agent": "Your account is active and in good standing. ✅ Last login: today at 9:34 AM. Role: Admin. Plan: Pro. Need to change any settings?" },
      { "user": "settings",              "agent": "Settings panel is available in the top-right menu. You can configure notifications, appearance, integrations, and API keys there." },
      { "user": "change password",       "agent": "To change your password: Settings → Security → Change Password. You'll receive a verification email at your registered address." },
      { "user": "notifications",         "agent": "You have **3 unread notifications**: 1 system update, 1 order alert, and 1 new feature announcement. Check the 🔔 icon in the header." },
      { "user": "logout",                "agent": "To log out, click your avatar in the top-right corner and select 'Sign Out'. Your session will be securely ended." },
      { "user": "billing",               "agent": "Your current plan is **Pro** at $79/month. Next billing date: May 15, 2026. Manage billing in Settings → Billing." },
      { "user": "what is convengine",    "agent": "ConvEngine is an AI-powered chat SDK that lets you embed intelligent assistants into any React app. It supports custom renderers, rich interactions, dark mode, and connects to your existing backend. 🚀" },
      { "user": "tell me about convengine", "agent": "ConvEngine is a React chat SDK. Drop `<ConvEngineChat>` into any app, point `config.apiHost` at your AI backend, and get a full-featured widget with custom renderers, dark mode, multi-layout support, and more." },
      { "user": "who made convengine",   "agent": "ConvEngine is built by **Salil Nair**. It's designed to make embedding AI chat into React apps fast and highly customisable." },
      { "user": "how does convengine work", "agent": "Install the npm package → add `<ConvEngineChat config={{ apiHost: '...' }}>` → point it at your AI backend → done! Custom renderers let you show rich interactive UI for structured JSON responses." },
      { "user": "what version",          "agent": "ConvEngine Chat is currently at **v1.0.0**. Check the docs or `package.json` for the latest version. New features ship regularly!" },
      { "user": "documentation",         "agent": "Full documentation is available in the Quickstart → Docs section. It covers installation, configuration, custom renderers, theming, and the full API reference." },
      { "user": "how to install",        "agent": "Install via npm:\n```\nnpm install @salilvnair/convengine-chat\n```\nThen add:\n```jsx\nimport { ConvEngineChat } from '@salilvnair/convengine-chat';\n<ConvEngineChat config={{ apiHost: 'https://your-backend.com' }} />\n```" },
      { "user": "contact support",       "agent": "You can contact support via:\n• Chat: click 'Talk to a human' below\n• Email: support@convengine.io\n• Response time: within 24 hours on business days." },
      { "user": "talk to support",       "agent": "I'll connect you with a support agent. In a real integration, this would trigger a live chat handoff. Is there something specific I can help with first?" },
      { "user": "speak to someone",      "agent": "Happy to help you reach a human! In production, clicking this would escalate to a live agent. For now, I can answer most questions directly — what do you need?" },
      { "user": "human agent",           "agent": "Escalating to a human agent... 🤝 (In production, this would trigger your live chat handoff integration. Is there something specific I can try to resolve first?)" },
      { "user": "how to use the dashboard", "agent": "The dashboard shows key metrics at the top, revenue charts in the middle, and recent orders at the bottom. Click any tab (Orders, Analytics, Profile) to dive deeper. Use the chat widget to ask questions about your data!" },
      { "user": "export data",           "agent": "To export data: click the **Export** button (⬇️) in the top-right of any table or chart. Formats available: CSV, Excel, PDF. Need a specific export?" },
      { "user": "filter by date",        "agent": "Use the date range picker in the top-right of charts and tables to filter by period. You can select Today, Last 7 Days, Last 30 Days, or a custom range." },
      { "user": "compare metrics",       "agent": "To compare metrics, use the Analytics tab and select the comparison period in the top filter. You can overlay current vs previous period on any chart." },
      { "user": "show me the charts",    "agent": "Charts are available in the Dashboard and Analytics tabs. The Revenue chart shows weekly trends. Hover any bar to see the exact value. Want me to summarise the latest numbers?" },
      { "user": "what's the weather",    "agent": "I can't check the weather — I'm focused on your business data! ☀️ But I can tell you your sales are looking sunny — up 18% this quarter. 😄" },
      { "user": "tell me a joke",        "agent": "Why did the developer go broke? Because he used up all his **cache**! 😄" },
      { "user": "what time is it",       "agent": "I don't have a real-time clock, but your last order came in at 10:42 AM today! ⏰ Anything I can help you with?" },
      { "user": "what's 2+2",            "agent": "That's 4! And I can calculate revenue growth, conversion rates, and more. 📊 Anything business-related I can help with?" },
      { "user": "are you human",         "agent": "Nope! I'm ConvEngine, an AI assistant. But I'm pretty good at understanding you — and your business data. 🤖" },
      { "user": "are you a robot",       "agent": "I'm an AI assistant powered by ConvEngine. I understand natural language and can help with orders, analytics, products, and more!" },
      { "user": "do you sleep",          "agent": "I'm available 24/7 — no sleep needed! 😄 What can I help with?" },
      { "user": "tell me a story",       "agent": "Once upon a time, a developer added ConvEngine to their app and shipped a fully-featured AI chat widget in under an hour. Revenue grew 18%. The end. 🚀" },
      { "user": "what is the meaning of life", "agent": "42. But more practically, I'm here to help you make sense of your data. What would you like to know? 😄" },
      { "user": "i'm bored",             "agent": "Let me entertain you with data! Your top product this week grew **31%**. Apple Watch Ultra is on fire! 📈 Want the full breakdown?" },
      { "user": "who are you",           "agent": "I'm ConvEngine — an AI assistant embedded in this demo. I can help you with orders, products, analytics, flights, and general questions. What would you like to know?" },
      { "user": "what's your name",      "agent": "My name is ConvEngine! I'm an AI assistant here to help you explore your data and products. What can I do for you?" },
      { "user": "thank you",             "agent": "You're welcome! 😊 Is there anything else I can help with?" },
      { "user": "thanks",                "agent": "Happy to help! Anything else you need? 👍" },
      { "user": "thanks a lot",          "agent": "My pleasure! Let me know if you need anything else." },
      { "user": "that's helpful",        "agent": "Glad I could help! Feel free to ask more questions anytime. 😊" },
      { "user": "great",                 "agent": "Awesome! 🎉 Anything else I can help you with?" },
      { "user": "perfect",               "agent": "Glad that worked out! Let me know if there's anything else. 😊" },
      { "user": "awesome",               "agent": "Thanks! 😄 Is there anything else you'd like to explore?" },
      { "user": "nice",                  "agent": "Thanks! 😊 Anything else I can help with today?" },
      { "user": "ok",                    "agent": "Got it! Let me know if you need anything else. 👍" },
      { "user": "cool",                  "agent": "Cool! 😎 Anything else on your mind?" },
      { "user": "bye",                   "agent": "Goodbye! 👋 Come back anytime you need help!" },
      { "user": "goodbye",               "agent": "Take care! 😊 I'll be here whenever you need me." },
      { "user": "see you",               "agent": "See you later! 👋 Have a great day!" },
      { "user": "later",                 "agent": "Later! 😄 Feel free to come back anytime." },
      { "user": "see ya",                "agent": "See ya! 👋 Take care!" },
      { "user": "take care",             "agent": "You too! 😊 Come back anytime." },
      { "user": "have a good day",       "agent": "Thanks, you too! 🌟 Feel free to come back whenever you need help." },
      { "user": "goodbye for now",       "agent": "Goodbye for now! 👋 I'll be right here when you need me." },
      { "user": "fill out a form",       "agent": "{\"type\":\"CompleteForm\",\"title\":\"Tell us about yourself\"}" },
      { "user": "register",              "agent": "{\"type\":\"CompleteForm\",\"title\":\"Create your profile\"}" },
      { "user": "submit my info",        "agent": "{\"type\":\"CompleteForm\",\"title\":\"Submit your information\"}" },
      { "user": "sign up",               "agent": "{\"type\":\"CompleteForm\",\"title\":\"Sign up — tell us about yourself\"}" },
      { "user": "complete registration", "agent": "{\"type\":\"CompleteForm\",\"title\":\"Complete your registration\"}" }
    ],
    "fallbacks": [
      "Hmm, I'm not sure I caught that. Could you rephrase?",
      "Interesting question! I can help with orders, analytics, products, and flights. What would you like to know?",
      "I didn't quite follow that. Try asking about orders, flights, products, or analytics!",
      "Not sure I understand — could you be more specific? I'm great with orders, sales data, and product questions.",
      "That's a bit outside my knowledge area, but I'm great at orders, analytics, and products. What can I help with?",
      "Let me think... I'm best at helping with business data, orders, products, and flights. Anything in those areas?",
      "I'm not sure about that one. Want to try 'show analytics', 'track my order', or 'show flights'?",
      "Good question! I specialise in orders, analytics, products, and flights. Ask me anything in those areas.",
      "I may have missed the context there. Could you try again? I can help with orders, data, and more.",
      "Oops, I didn't get that. Quick tip: try 'show products', 'show flights', or 'how is sales doing' to see what I can do! 😄"
    ]
  };

  // ── Helpers (mirrors fake-chat.js) ──────────────────────────────────────────

  function normalise(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var STOP_WORDS = { a:1,an:1,the:1,is:1,it:1,in:1,on:1,at:1,to:1,for:1,of:1,and:1,or:1,but:1,
    i:1,me:1,my:1,we:1,you:1,your:1,can:1,do:1,does:1,did:1,be:1,am:1,are:1,
    was:1,were:1,have:1,has:1,had:1,will:1,would:1,should:1,could:1,may:1,
    might:1,shall:1,let:1,please:1,hey:1,hi:1,hello:1,s:1,re:1,ll:1,ve:1 };

  function tokenise(str) {
    return normalise(str).split(' ').filter(function(t) { return t && !STOP_WORDS[t]; });
  }

  function levenshtein(a, b) {
    var m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    if (a === b)  return 0;
    var prev = [], i, j;
    for (i = 0; i <= n; i++) prev[i] = i;
    for (i = 1; i <= m; i++) {
      var curr = [i];
      for (j = 1; j <= n; j++) {
        var cost = a[i-1] === b[j-1] ? 0 : 1;
        curr[j] = Math.min(curr[j-1]+1, prev[j]+1, prev[j-1]+cost);
      }
      prev = curr;
    }
    return prev[n];
  }

  function jaccardSimilarity(tokA, tokB) {
    if (!tokA.length || !tokB.length) return 0;
    var setA = {}, setB = {}, inter = 0, union = {};
    tokA.forEach(function(t) { setA[t] = 1; union[t] = 1; });
    tokB.forEach(function(t) { setB[t] = 1; union[t] = 1; });
    tokA.forEach(function(t) { if (setB[t]) inter++; });
    return inter / Object.keys(union).length;
  }

  // ── Dynamic response templates ───────────────────────────────────────────────

  var BOOK_FLIGHT_RESPONSES = [
    function(c,p){ return '✈️ Flight booked! Your '+c+' seat at '+p+' is confirmed. Confirmation #: FL-'+Math.random().toString(36).slice(2,8).toUpperCase()+' 🎉 Check your email for the boarding pass!'; },
    function(c,p){ return '🛫 Wheels up soon! '+c+' at '+p+' — your booking is locked in. Have a great flight! 🌍'; },
    function(c,p){ return '🎟️ Booking confirmed for '+c+' at '+p+'. Your e-ticket will arrive shortly. Safe travels! ✈️'; },
    function(c,p){ return '🚀 You\'re all set! '+c+' flight secured at '+p+'. Gate info arrives 24h before departure. Bon voyage! 🌏'; },
    function(c,p){ return '✅ '+c+' at '+p+' — booked and confirmed! We\'ve sent the itinerary to your email. Enjoy your trip! 🗺️'; }
  ];

  var BUY_NOW_RESPONSES = [
    function(items){ return '🛒 Order placed! Your '+items+' '+(items.indexOf(',')>-1?'are':'is')+' on the way. Estimated delivery: 2–4 business days. 📦✨'; },
    function(items){ return '🎉 Woohoo! '+items+' added to your order. We\'re packing it up right now! 🏷️📬'; },
    function(items){ return '✅ Purchase confirmed for '+items+'! You\'ll receive a confirmation email shortly. Happy shopping! 🛍️'; },
    function(items){ return '🚀 Launching your order into the fulfillment pipeline... '+items+' secured! Expect tracking info soon. 📡'; },
    function(items){ return '💳 Payment processed! '+items+' '+(items.indexOf(',')>-1?'are':'is')+' queued for dispatch. Your wallet felt that. 😄📦'; },
    function(items){ return '🎁 Amazing choice! '+items+' will arrive gift-wrapped (in our hearts, at least). Shipping in 24h! 💝'; },
    function(items){ return '🏪 Checkout complete! '+items+' — excellent taste! Our warehouse team is on it. 🧑‍🏭📦'; }
  ];

  var FORM_SUBMIT_RESPONSES = [
    function(n,c,d){ return '✅ **Information Collected!**\n\nThank you, **'+n+'**! Here\'s a summary of what we received:\n\n- 🌍 **Country:** '+c+'\n- 🎂 **Date of Birth:** '+d+'\n- 📋 **Terms:** Accepted\n\nYour profile is all set! We\'ll send a welcome email shortly. 🎉'; },
    function(n,c,d){ return '🎊 **Profile Created Successfully!**\n\nWelcome aboard, **'+n+'**! Your registration is complete.\n\n- **Location:** '+c+'\n- **DOB:** '+d+'\n- **Status:** Verified ✅\n\nYou\'re all set to get started!'; },
    function(n,c,d){ return '📋 **Information Received!**\n\nHi **'+n+'**, we\'ve got everything we need!\n\n| Field | Value |\n|---|---|\n| Country | '+c+' |\n| Date of Birth | '+d+' |\n| Terms | Accepted |\n\nYour account is now active. Welcome! 🚀'; }
  ];

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function matchResponse(input) {
    var norm  = normalise(input);
    var inTok = tokenise(input);
    var pairs = DATA.pairs;
    var fallbacks = DATA.fallbacks;

    // Stage 0: Buy Now
    if (norm.indexOf(normalise('buy now cart items:')) === 0) {
      var rawItems = input.slice(input.toLowerCase().indexOf(':') + 1).trim();
      return pick(BUY_NOW_RESPONSES)(rawItems || 'your selected items');
    }

    // Stage 0b: Book flight
    var bfMatch = input.trim().match(/^book (.+?) at (\$[\d,]+)$/i);
    if (bfMatch) return pick(BOOK_FLIGHT_RESPONSES)(bfMatch[1], bfMatch[2]);

    // Stage 0c: Form submit
    if (norm.indexOf(normalise('form submitted:')) === 0) {
      var details = input.slice(input.toLowerCase().indexOf(':') + 1).trim();
      var parts   = details.split(',').map(function(s){ return s.trim(); });
      var name    = parts[0] || 'there';
      var country = parts[1] || 'your country';
      var dobPart = '';
      for (var k = 0; k < parts.length; k++) {
        if (parts[k].toLowerCase().indexOf('dob:') === 0) { dobPart = parts[k]; break; }
      }
      var dob = (dobPart || 'DOB: not provided').replace(/^dob:\s*/i, '');
      return pick(FORM_SUBMIT_RESPONSES)(name, country, dob);
    }

    // Stage 1: Exact match
    for (var i = 0; i < pairs.length; i++) {
      if (normalise(pairs[i].user) === norm) return pairs[i].agent;
    }

    // Stage 2: Contains match
    for (var i = 0; i < pairs.length; i++) {
      var pNorm = normalise(pairs[i].user);
      if (norm.indexOf(pNorm) !== -1 || pNorm.indexOf(norm) !== -1) return pairs[i].agent;
    }

    // Stage 3a: Jaccard
    var bestPair = null, bestScore = 0;
    for (var i = 0; i < pairs.length; i++) {
      var score = jaccardSimilarity(inTok, tokenise(pairs[i].user));
      if (score > bestScore) { bestScore = score; bestPair = pairs[i]; }
    }
    if (bestScore >= 0.35 && bestPair) return bestPair.agent;

    // Stage 3b: Levenshtein
    if (norm.length <= 40) {
      var bestDist = Infinity, levenPair = null;
      for (var i = 0; i < pairs.length; i++) {
        var pNorm = normalise(pairs[i].user);
        if (Math.abs(pNorm.length - norm.length) > 10) continue;
        var dist = levenshtein(norm, pNorm);
        var threshold = Math.max(2, Math.floor(Math.min(norm.length, pNorm.length) * 0.30));
        if (dist < bestDist && dist <= threshold) { bestDist = dist; levenPair = pairs[i]; }
      }
      if (levenPair) return levenPair.agent;
    }

    // Stage 4: Random fallback
    return pick(fallbacks);
  }

  // ── Fetch interceptor ────────────────────────────────────────────────────────

  var _origFetch = window.fetch;
  window.fetch = function(url, opts) {
    var urlStr = typeof url === 'string' ? url : (url && url.url) || '';
    var method = (opts && opts.method || 'GET').toUpperCase();

    if (method === 'POST' && urlStr.indexOf('/api/v1/conversation/message') !== -1) {
      return new Promise(function(resolve) {
        var body = {};
        try { body = JSON.parse(opts.body || '{}'); } catch(e) {}
        var delay = 300 + Math.random() * 600;
        setTimeout(function() {
          var agent = matchResponse(body.message || '');
          var payload = (typeof agent === 'object') ? agent : agent;
          resolve(new Response(JSON.stringify({ payload: payload }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }, delay);
      });
    }

    return _origFetch.apply(this, arguments);
  };
})();
