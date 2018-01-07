# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  # Fix to avoid rsync error message if not installed on system
  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.define "db" do |db|
    db.vm.hostname = "db.lcl"
    db.vm.network :private_network, ip: "192.168.33.3"
    
    db.vm.provision "ansible" do |ansible|
      ansible.playbook = "db/db.yml"
    end
  end

  config.vm.define "api" do |api|
    api.vm.hostname = "api.lcl"
    api.vm.network :private_network, ip: "192.168.33.2"

    api.vm.provision "ansible" do |ansible|
      ansible.playbook = "api/api.yml"
    end
  end

  
end
