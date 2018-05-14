@trucks.each do |truck|
  json.set! truck.id do
    json.partial! 'api/trucks/truck', truck: truck
  end
end
