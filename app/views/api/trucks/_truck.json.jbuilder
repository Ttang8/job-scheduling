json.extract! truck, :id, :name

json.set! :jobs do
  json.array! truck.jobs do |job|
    json.partial! 'api/jobs/job', job: job
  end
end
