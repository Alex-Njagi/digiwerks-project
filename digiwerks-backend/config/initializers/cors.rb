Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:5173", "https://digiwerks-project.vercel.app/"
    resource "*",
      headers: :any,
      methods: :any,
      credentials: true
  end
end