name: 书旗3
on:
  workflow_dispatch:
  watch:
    types: started
  schedule:
    - cron: '0 16 * * *'
jobs:
  build:
    runs-on: ubuntu-latest       
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      
      - name: Checkout
        run: |
          git clone https://github.com/zhnlanf/sqxs.git ~/sqxs
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: npm install
        run: |
          cd ~/sqxs/Task        
          npm install
          npm install cron
          npm install request
          curl ipinfo.io/json
      
      - name: '【书旗小说3】'
        run: |  
          cd ~/sqxs/Task
          node 书旗3.js
