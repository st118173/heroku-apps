# config valid only for current version of Capistrano

lock '3.6.1'
require 'capistrano-db-tasks'
set :application, 'maa'
#set :application, "fancy_shoes"
set :repo_url, 'git@vgl-ait.org:web16-14.git'

set :passenger_restart_with_touch,true
# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'
set :deploy_to, '/home/deploy/maa'

# Default value for :scm is :git
set :scm, :git
set :repository, "git@vgl-ait.org:web16-14"
# Default value for :format is :airbrussh.
# set :format, :airbrussh
set :rbenv_type, :user
set :rbenv_ruby, '2.3.1'
set :repo_tree, 'maa'
# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, 'config/database.yml', 'config/secrets.yml'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
set :keep_releases, 5
set :stages,['production']
set :default_stage,'production'
set :user, 'deploy'
set :branch,'master'
namespace :deploy do
  desc "reload the database with seed data"
  task :seed do
    run "cd #{current_path}; rake db:seed RAILS_ENV=#{rails_env}"
  end
end