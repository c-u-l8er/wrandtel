WRANDTEL
========

portfolio:
- graphiti          // elixir transactional weighted property graph database
- dashcloudboard    // elixir multi-tenant cloud management system dashboard (CMSDB)
- webtracks         // elixir mesh bulletin board system for CMSDB as a SSSPA
- deja: video ultra // elixir video platform for CMSDB as a SSSPA
- merce             // elixir ecommerce platform for CMSDB as a SSSPA

web services domains:
- 33.wrandtel.cc -> home server running both (CMSDB connected with Coolify)
- 33.customer1.cc -> remote server running both (CMSDB connected with Coolify)
- 33.customer2.cc -> remote server running both (CMSDB connected with Coolify)

infrastructure domains:
- west.usa.wrandtel.cc -> Dedicated AMD EPYC processors ... USA Ashburn, Washington
- east.usa.wrandtel.cc -> Dedicated AMD EPYC processors ... USA Hillsboro, Oregon
- more info: https://www.hetzner.com/cloud/

marketing static-site domains:
- wrandtel.cc
- graphiti.wrandtel.cc
- dashcloudboard.wrandtel.cc
- webtracks.wrandtel.cc
- deja-vu.wrandtel.cc
- merce.wrandtel.cc

tenant main domains:
- tenant1.main.wrandtel.cc -> a dedicated graphiti instance running distributed across all infrastructure domains
- tenant2.main.wrandtel.cc -> a dedicated graphiti instance running distributed across all infrastructure domains

tenant cloud application(s) domains:
- app1.cloud.tenant1.main.wrandtel.cc -> a webtracks instance using tenant1 graphiti instance
- app2.cloud.tenant1.main.wrandtel.cc -> a deja: video ultra instance using tenant1 graphiti instance
- app3.cloud.tenant1.main.wrandtel.cc -> a merce instance using tenant1 graphiti instance
- app1.cloud.tenant2.main.wrandtel.cc -> a webtracks instance using tenant1 graphiti instance
- all of the above cloud apps are running distributed across all infrastructure domains
