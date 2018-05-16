json.extract! truck, :id, :name, :overnight
json.startTime truck.s_time
json.endTime truck.e_time

json.set! :jobs do
  json.array! truck.jobs do |job|
    json.partial! 'api/jobs/job', job: job
  end
end
